
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        if (value === null) {
            node.style.removeProperty(key);
        }
        else {
            node.style.setProperty(key, value, important ? 'important' : '');
        }
    }
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    function beforeUpdate(fn) {
        get_current_component().$$.before_update.push(fn);
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }
    function afterUpdate(fn) {
        get_current_component().$$.after_update.push(fn);
    }
    function createEventDispatcher() {
        const component = get_current_component();
        return (type, detail, { cancelable = false } = {}) => {
            const callbacks = component.$$.callbacks[type];
            if (callbacks) {
                // TODO are there situations where events could be dispatched
                // in a server (non-DOM) environment?
                const event = custom_event(type, detail, { cancelable });
                callbacks.slice().forEach(fn => {
                    fn.call(component, event);
                });
                return !event.defaultPrevented;
            }
            return true;
        };
    }
    // TODO figure out if we still want to support
    // shorthand events, or if we want to implement
    // a real bubbling mechanism
    function bubble(component, event) {
        const callbacks = component.$$.callbacks[event.type];
        if (callbacks) {
            // @ts-ignore
            callbacks.slice().forEach(fn => fn.call(this, event));
        }
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    function get_spread_update(levels, updates) {
        const update = {};
        const to_null_out = {};
        const accounted_for = { $$scope: 1 };
        let i = levels.length;
        while (i--) {
            const o = levels[i];
            const n = updates[i];
            if (n) {
                for (const key in o) {
                    if (!(key in n))
                        to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            }
            else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update))
                update[key] = undefined;
        }
        return update;
    }
    function get_spread_object(spread_props) {
        return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.48.0' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function prop_dev(node, property, value) {
        node[property] = value;
        dispatch_dev('SvelteDOMSetProperty', { node, property, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/lib/components/Accordion/AccordionPanel.svelte generated by Svelte v3.48.0 */

    const file$g = "src/lib/components/Accordion/AccordionPanel.svelte";

    // (18:2) {#if isOpen}
    function create_if_block$2(ctx) {
    	let p;
    	let t;

    	const block = {
    		c: function create() {
    			p = element("p");
    			t = text(/*panelContent*/ ctx[0]);
    			add_location(p, file$g, 18, 4, 307);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			append_dev(p, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*panelContent*/ 1) set_data_dev(t, /*panelContent*/ ctx[0]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(18:2) {#if isOpen}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$h(ctx) {
    	let div;
    	let if_block = /*isOpen*/ ctx[1] && create_if_block$2(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (if_block) if_block.c();
    			attr_dev(div, "class", "accordion-panel svelte-1yos4b4");
    			attr_dev(div, "role", "region");
    			attr_dev(div, "id", /*panelID*/ ctx[2]);
    			attr_dev(div, "aria-labelledby", /*labeledBy*/ ctx[3]);
    			attr_dev(div, "style", /*style*/ ctx[4]);
    			toggle_class(div, "open-panel", /*isOpen*/ ctx[1]);
    			add_location(div, file$g, 9, 0, 156);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			if (if_block) if_block.m(div, null);
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*isOpen*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$2(ctx);
    					if_block.c();
    					if_block.m(div, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*panelID*/ 4) {
    				attr_dev(div, "id", /*panelID*/ ctx[2]);
    			}

    			if (dirty & /*labeledBy*/ 8) {
    				attr_dev(div, "aria-labelledby", /*labeledBy*/ ctx[3]);
    			}

    			if (dirty & /*style*/ 16) {
    				attr_dev(div, "style", /*style*/ ctx[4]);
    			}

    			if (dirty & /*isOpen*/ 2) {
    				toggle_class(div, "open-panel", /*isOpen*/ ctx[1]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (if_block) if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$h.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$h($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('AccordionPanel', slots, []);
    	let { panelContent = "" } = $$props;
    	let { isOpen } = $$props;
    	let { panelID } = $$props;
    	let { labeledBy } = $$props;
    	let { style } = $$props;
    	const writable_props = ['panelContent', 'isOpen', 'panelID', 'labeledBy', 'style'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<AccordionPanel> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('panelContent' in $$props) $$invalidate(0, panelContent = $$props.panelContent);
    		if ('isOpen' in $$props) $$invalidate(1, isOpen = $$props.isOpen);
    		if ('panelID' in $$props) $$invalidate(2, panelID = $$props.panelID);
    		if ('labeledBy' in $$props) $$invalidate(3, labeledBy = $$props.labeledBy);
    		if ('style' in $$props) $$invalidate(4, style = $$props.style);
    	};

    	$$self.$capture_state = () => ({
    		panelContent,
    		isOpen,
    		panelID,
    		labeledBy,
    		style
    	});

    	$$self.$inject_state = $$props => {
    		if ('panelContent' in $$props) $$invalidate(0, panelContent = $$props.panelContent);
    		if ('isOpen' in $$props) $$invalidate(1, isOpen = $$props.isOpen);
    		if ('panelID' in $$props) $$invalidate(2, panelID = $$props.panelID);
    		if ('labeledBy' in $$props) $$invalidate(3, labeledBy = $$props.labeledBy);
    		if ('style' in $$props) $$invalidate(4, style = $$props.style);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [panelContent, isOpen, panelID, labeledBy, style];
    }

    class AccordionPanel extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$h, create_fragment$h, safe_not_equal, {
    			panelContent: 0,
    			isOpen: 1,
    			panelID: 2,
    			labeledBy: 3,
    			style: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AccordionPanel",
    			options,
    			id: create_fragment$h.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*isOpen*/ ctx[1] === undefined && !('isOpen' in props)) {
    			console.warn("<AccordionPanel> was created without expected prop 'isOpen'");
    		}

    		if (/*panelID*/ ctx[2] === undefined && !('panelID' in props)) {
    			console.warn("<AccordionPanel> was created without expected prop 'panelID'");
    		}

    		if (/*labeledBy*/ ctx[3] === undefined && !('labeledBy' in props)) {
    			console.warn("<AccordionPanel> was created without expected prop 'labeledBy'");
    		}

    		if (/*style*/ ctx[4] === undefined && !('style' in props)) {
    			console.warn("<AccordionPanel> was created without expected prop 'style'");
    		}
    	}

    	get panelContent() {
    		throw new Error("<AccordionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set panelContent(value) {
    		throw new Error("<AccordionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isOpen() {
    		throw new Error("<AccordionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isOpen(value) {
    		throw new Error("<AccordionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get panelID() {
    		throw new Error("<AccordionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set panelID(value) {
    		throw new Error("<AccordionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get labeledBy() {
    		throw new Error("<AccordionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set labeledBy(value) {
    		throw new Error("<AccordionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<AccordionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<AccordionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/lib/components/Accordion/AccordionButton.svelte generated by Svelte v3.48.0 */
    const file$f = "src/lib/components/Accordion/AccordionButton.svelte";

    function create_fragment$g(ctx) {
    	let button;

    	let t_value = (/*headerTitle*/ ctx[0]
    	? /*headerTitle*/ ctx[0]
    	: "Please define header title in options object!") + "";

    	let t;
    	let button_aria_label_value;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			t = text(t_value);
    			attr_dev(button, "class", "header-button svelte-1hp352r");
    			attr_dev(button, "aria-expanded", /*isOpen*/ ctx[5]);
    			attr_dev(button, "aria-controls", /*controls*/ ctx[1]);
    			attr_dev(button, "aria-label", button_aria_label_value = /*isOpen*/ ctx[5] ? /*textToRead*/ ctx[4] : "");
    			attr_dev(button, "id", /*id*/ ctx[2]);
    			attr_dev(button, "style", /*style*/ ctx[3]);
    			add_location(button, file$f, 20, 0, 448);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			append_dev(button, t);

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*click_handler*/ ctx[7], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*headerTitle*/ 1 && t_value !== (t_value = (/*headerTitle*/ ctx[0]
    			? /*headerTitle*/ ctx[0]
    			: "Please define header title in options object!") + "")) set_data_dev(t, t_value);

    			if (dirty & /*isOpen*/ 32) {
    				attr_dev(button, "aria-expanded", /*isOpen*/ ctx[5]);
    			}

    			if (dirty & /*controls*/ 2) {
    				attr_dev(button, "aria-controls", /*controls*/ ctx[1]);
    			}

    			if (dirty & /*isOpen, textToRead*/ 48 && button_aria_label_value !== (button_aria_label_value = /*isOpen*/ ctx[5] ? /*textToRead*/ ctx[4] : "")) {
    				attr_dev(button, "aria-label", button_aria_label_value);
    			}

    			if (dirty & /*id*/ 4) {
    				attr_dev(button, "id", /*id*/ ctx[2]);
    			}

    			if (dirty & /*style*/ 8) {
    				attr_dev(button, "style", /*style*/ ctx[3]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$g.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$g($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('AccordionButton', slots, []);
    	let { headerTitle } = $$props;
    	let { controls } = $$props;
    	let { id } = $$props;
    	let { style } = $$props;
    	let { textToRead } = $$props;
    	let { isOpen } = $$props;
    	const dispatch = createEventDispatcher();

    	const handleHeaderClick = event => {
    		return dispatch("updatePanelStates", { target: event.target.id });
    	};

    	const writable_props = ['headerTitle', 'controls', 'id', 'style', 'textToRead', 'isOpen'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<AccordionButton> was created with unknown prop '${key}'`);
    	});

    	const click_handler = event => handleHeaderClick(event);

    	$$self.$$set = $$props => {
    		if ('headerTitle' in $$props) $$invalidate(0, headerTitle = $$props.headerTitle);
    		if ('controls' in $$props) $$invalidate(1, controls = $$props.controls);
    		if ('id' in $$props) $$invalidate(2, id = $$props.id);
    		if ('style' in $$props) $$invalidate(3, style = $$props.style);
    		if ('textToRead' in $$props) $$invalidate(4, textToRead = $$props.textToRead);
    		if ('isOpen' in $$props) $$invalidate(5, isOpen = $$props.isOpen);
    	};

    	$$self.$capture_state = () => ({
    		createEventDispatcher,
    		headerTitle,
    		controls,
    		id,
    		style,
    		textToRead,
    		isOpen,
    		dispatch,
    		handleHeaderClick
    	});

    	$$self.$inject_state = $$props => {
    		if ('headerTitle' in $$props) $$invalidate(0, headerTitle = $$props.headerTitle);
    		if ('controls' in $$props) $$invalidate(1, controls = $$props.controls);
    		if ('id' in $$props) $$invalidate(2, id = $$props.id);
    		if ('style' in $$props) $$invalidate(3, style = $$props.style);
    		if ('textToRead' in $$props) $$invalidate(4, textToRead = $$props.textToRead);
    		if ('isOpen' in $$props) $$invalidate(5, isOpen = $$props.isOpen);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		headerTitle,
    		controls,
    		id,
    		style,
    		textToRead,
    		isOpen,
    		handleHeaderClick,
    		click_handler
    	];
    }

    class AccordionButton extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$g, create_fragment$g, safe_not_equal, {
    			headerTitle: 0,
    			controls: 1,
    			id: 2,
    			style: 3,
    			textToRead: 4,
    			isOpen: 5
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AccordionButton",
    			options,
    			id: create_fragment$g.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*headerTitle*/ ctx[0] === undefined && !('headerTitle' in props)) {
    			console.warn("<AccordionButton> was created without expected prop 'headerTitle'");
    		}

    		if (/*controls*/ ctx[1] === undefined && !('controls' in props)) {
    			console.warn("<AccordionButton> was created without expected prop 'controls'");
    		}

    		if (/*id*/ ctx[2] === undefined && !('id' in props)) {
    			console.warn("<AccordionButton> was created without expected prop 'id'");
    		}

    		if (/*style*/ ctx[3] === undefined && !('style' in props)) {
    			console.warn("<AccordionButton> was created without expected prop 'style'");
    		}

    		if (/*textToRead*/ ctx[4] === undefined && !('textToRead' in props)) {
    			console.warn("<AccordionButton> was created without expected prop 'textToRead'");
    		}

    		if (/*isOpen*/ ctx[5] === undefined && !('isOpen' in props)) {
    			console.warn("<AccordionButton> was created without expected prop 'isOpen'");
    		}
    	}

    	get headerTitle() {
    		throw new Error("<AccordionButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set headerTitle(value) {
    		throw new Error("<AccordionButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get controls() {
    		throw new Error("<AccordionButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set controls(value) {
    		throw new Error("<AccordionButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get id() {
    		throw new Error("<AccordionButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<AccordionButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<AccordionButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<AccordionButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get textToRead() {
    		throw new Error("<AccordionButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set textToRead(value) {
    		throw new Error("<AccordionButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isOpen() {
    		throw new Error("<AccordionButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isOpen(value) {
    		throw new Error("<AccordionButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/lib/components/Accordion/AccordionHeader.svelte generated by Svelte v3.48.0 */
    const file$e = "src/lib/components/Accordion/AccordionHeader.svelte";

    function create_fragment$f(ctx) {
    	let div;
    	let accordionbutton;
    	let current;

    	accordionbutton = new AccordionButton({
    			props: {
    				textToRead: /*textToRead*/ ctx[4],
    				headerTitle: /*headerTitle*/ ctx[1],
    				controls: /*controls*/ ctx[2],
    				id: /*id*/ ctx[5],
    				style: /*style*/ ctx[3],
    				isOpen: /*isOpen*/ ctx[6]
    			},
    			$$inline: true
    		});

    	accordionbutton.$on("updatePanelStates", /*updatePanelStates_handler*/ ctx[7]);

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(accordionbutton.$$.fragment);
    			attr_dev(div, "class", "accordion-header svelte-1oqddex");
    			attr_dev(div, "aria-level", /*headerLevel*/ ctx[0]);
    			attr_dev(div, "role", "heading");
    			attr_dev(div, "style", /*style*/ ctx[3]);
    			add_location(div, file$e, 13, 0, 263);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(accordionbutton, div, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const accordionbutton_changes = {};
    			if (dirty & /*textToRead*/ 16) accordionbutton_changes.textToRead = /*textToRead*/ ctx[4];
    			if (dirty & /*headerTitle*/ 2) accordionbutton_changes.headerTitle = /*headerTitle*/ ctx[1];
    			if (dirty & /*controls*/ 4) accordionbutton_changes.controls = /*controls*/ ctx[2];
    			if (dirty & /*id*/ 32) accordionbutton_changes.id = /*id*/ ctx[5];
    			if (dirty & /*style*/ 8) accordionbutton_changes.style = /*style*/ ctx[3];
    			if (dirty & /*isOpen*/ 64) accordionbutton_changes.isOpen = /*isOpen*/ ctx[6];
    			accordionbutton.$set(accordionbutton_changes);

    			if (!current || dirty & /*headerLevel*/ 1) {
    				attr_dev(div, "aria-level", /*headerLevel*/ ctx[0]);
    			}

    			if (!current || dirty & /*style*/ 8) {
    				attr_dev(div, "style", /*style*/ ctx[3]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(accordionbutton.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(accordionbutton.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(accordionbutton);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$f.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$f($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('AccordionHeader', slots, []);
    	let { headerLevel = 3 } = $$props;
    	let { headerTitle } = $$props;
    	let { controls = "" } = $$props;
    	let { style } = $$props;
    	let { textToRead } = $$props;
    	let { id } = $$props;
    	let { isOpen } = $$props;

    	const writable_props = [
    		'headerLevel',
    		'headerTitle',
    		'controls',
    		'style',
    		'textToRead',
    		'id',
    		'isOpen'
    	];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<AccordionHeader> was created with unknown prop '${key}'`);
    	});

    	function updatePanelStates_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	$$self.$$set = $$props => {
    		if ('headerLevel' in $$props) $$invalidate(0, headerLevel = $$props.headerLevel);
    		if ('headerTitle' in $$props) $$invalidate(1, headerTitle = $$props.headerTitle);
    		if ('controls' in $$props) $$invalidate(2, controls = $$props.controls);
    		if ('style' in $$props) $$invalidate(3, style = $$props.style);
    		if ('textToRead' in $$props) $$invalidate(4, textToRead = $$props.textToRead);
    		if ('id' in $$props) $$invalidate(5, id = $$props.id);
    		if ('isOpen' in $$props) $$invalidate(6, isOpen = $$props.isOpen);
    	};

    	$$self.$capture_state = () => ({
    		AccordionButton,
    		headerLevel,
    		headerTitle,
    		controls,
    		style,
    		textToRead,
    		id,
    		isOpen
    	});

    	$$self.$inject_state = $$props => {
    		if ('headerLevel' in $$props) $$invalidate(0, headerLevel = $$props.headerLevel);
    		if ('headerTitle' in $$props) $$invalidate(1, headerTitle = $$props.headerTitle);
    		if ('controls' in $$props) $$invalidate(2, controls = $$props.controls);
    		if ('style' in $$props) $$invalidate(3, style = $$props.style);
    		if ('textToRead' in $$props) $$invalidate(4, textToRead = $$props.textToRead);
    		if ('id' in $$props) $$invalidate(5, id = $$props.id);
    		if ('isOpen' in $$props) $$invalidate(6, isOpen = $$props.isOpen);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		headerLevel,
    		headerTitle,
    		controls,
    		style,
    		textToRead,
    		id,
    		isOpen,
    		updatePanelStates_handler
    	];
    }

    class AccordionHeader extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$f, create_fragment$f, safe_not_equal, {
    			headerLevel: 0,
    			headerTitle: 1,
    			controls: 2,
    			style: 3,
    			textToRead: 4,
    			id: 5,
    			isOpen: 6
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AccordionHeader",
    			options,
    			id: create_fragment$f.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*headerTitle*/ ctx[1] === undefined && !('headerTitle' in props)) {
    			console.warn("<AccordionHeader> was created without expected prop 'headerTitle'");
    		}

    		if (/*style*/ ctx[3] === undefined && !('style' in props)) {
    			console.warn("<AccordionHeader> was created without expected prop 'style'");
    		}

    		if (/*textToRead*/ ctx[4] === undefined && !('textToRead' in props)) {
    			console.warn("<AccordionHeader> was created without expected prop 'textToRead'");
    		}

    		if (/*id*/ ctx[5] === undefined && !('id' in props)) {
    			console.warn("<AccordionHeader> was created without expected prop 'id'");
    		}

    		if (/*isOpen*/ ctx[6] === undefined && !('isOpen' in props)) {
    			console.warn("<AccordionHeader> was created without expected prop 'isOpen'");
    		}
    	}

    	get headerLevel() {
    		throw new Error("<AccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set headerLevel(value) {
    		throw new Error("<AccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get headerTitle() {
    		throw new Error("<AccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set headerTitle(value) {
    		throw new Error("<AccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get controls() {
    		throw new Error("<AccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set controls(value) {
    		throw new Error("<AccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<AccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<AccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get textToRead() {
    		throw new Error("<AccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set textToRead(value) {
    		throw new Error("<AccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get id() {
    		throw new Error("<AccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<AccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isOpen() {
    		throw new Error("<AccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isOpen(value) {
    		throw new Error("<AccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/lib/components/Accordion/AccordionItem.svelte generated by Svelte v3.48.0 */
    const file$d = "src/lib/components/Accordion/AccordionItem.svelte";

    function create_fragment$e(ctx) {
    	let div;
    	let accordionheader;
    	let t;
    	let accordionpanel;
    	let div_style_value;
    	let current;

    	accordionheader = new AccordionHeader({
    			props: {
    				headerTitle: /*options*/ ctx[0].headerTitle,
    				controls: `panel${/*options*/ ctx[0].id}`,
    				id: `button${/*options*/ ctx[0].id}`,
    				textToRead: /*options*/ ctx[0].panelContent,
    				style: /*customStyles*/ ctx[2][0],
    				isOpen: /*isOpen*/ ctx[3],
    				headerLevel: /*headerLevel*/ ctx[1]
    			},
    			$$inline: true
    		});

    	accordionheader.$on("updatePanelStates", /*updatePanelStates_handler*/ ctx[5]);

    	accordionpanel = new AccordionPanel({
    			props: {
    				panelContent: /*options*/ ctx[0].panelContent,
    				panelID: `panel${/*options*/ ctx[0].id}`,
    				labeledBy: `button${/*options*/ ctx[0].id}`,
    				style: /*customStyles*/ ctx[2][1],
    				isOpen: /*isOpen*/ ctx[3]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(accordionheader.$$.fragment);
    			t = space();
    			create_component(accordionpanel.$$.fragment);
    			attr_dev(div, "class", "accordion-item svelte-ztnmqv");
    			attr_dev(div, "data-state", /*state*/ ctx[4]);
    			attr_dev(div, "style", div_style_value = /*customStyles*/ ctx[2][2]);
    			add_location(div, file$d, 14, 0, 302);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(accordionheader, div, null);
    			append_dev(div, t);
    			mount_component(accordionpanel, div, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const accordionheader_changes = {};
    			if (dirty & /*options*/ 1) accordionheader_changes.headerTitle = /*options*/ ctx[0].headerTitle;
    			if (dirty & /*options*/ 1) accordionheader_changes.controls = `panel${/*options*/ ctx[0].id}`;
    			if (dirty & /*options*/ 1) accordionheader_changes.id = `button${/*options*/ ctx[0].id}`;
    			if (dirty & /*options*/ 1) accordionheader_changes.textToRead = /*options*/ ctx[0].panelContent;
    			if (dirty & /*customStyles*/ 4) accordionheader_changes.style = /*customStyles*/ ctx[2][0];
    			if (dirty & /*isOpen*/ 8) accordionheader_changes.isOpen = /*isOpen*/ ctx[3];
    			if (dirty & /*headerLevel*/ 2) accordionheader_changes.headerLevel = /*headerLevel*/ ctx[1];
    			accordionheader.$set(accordionheader_changes);
    			const accordionpanel_changes = {};
    			if (dirty & /*options*/ 1) accordionpanel_changes.panelContent = /*options*/ ctx[0].panelContent;
    			if (dirty & /*options*/ 1) accordionpanel_changes.panelID = `panel${/*options*/ ctx[0].id}`;
    			if (dirty & /*options*/ 1) accordionpanel_changes.labeledBy = `button${/*options*/ ctx[0].id}`;
    			if (dirty & /*customStyles*/ 4) accordionpanel_changes.style = /*customStyles*/ ctx[2][1];
    			if (dirty & /*isOpen*/ 8) accordionpanel_changes.isOpen = /*isOpen*/ ctx[3];
    			accordionpanel.$set(accordionpanel_changes);

    			if (!current || dirty & /*state*/ 16) {
    				attr_dev(div, "data-state", /*state*/ ctx[4]);
    			}

    			if (!current || dirty & /*customStyles*/ 4 && div_style_value !== (div_style_value = /*customStyles*/ ctx[2][2])) {
    				attr_dev(div, "style", div_style_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(accordionheader.$$.fragment, local);
    			transition_in(accordionpanel.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(accordionheader.$$.fragment, local);
    			transition_out(accordionpanel.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(accordionheader);
    			destroy_component(accordionpanel);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$e.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$e($$self, $$props, $$invalidate) {
    	let state;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('AccordionItem', slots, []);
    	let { options } = $$props;
    	let { headerLevel = 2 } = $$props;
    	let { customStyles } = $$props;
    	let { isOpen } = $$props;
    	const writable_props = ['options', 'headerLevel', 'customStyles', 'isOpen'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<AccordionItem> was created with unknown prop '${key}'`);
    	});

    	function updatePanelStates_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	$$self.$$set = $$props => {
    		if ('options' in $$props) $$invalidate(0, options = $$props.options);
    		if ('headerLevel' in $$props) $$invalidate(1, headerLevel = $$props.headerLevel);
    		if ('customStyles' in $$props) $$invalidate(2, customStyles = $$props.customStyles);
    		if ('isOpen' in $$props) $$invalidate(3, isOpen = $$props.isOpen);
    	};

    	$$self.$capture_state = () => ({
    		AccordionPanel,
    		AccordionHeader,
    		options,
    		headerLevel,
    		customStyles,
    		isOpen,
    		state
    	});

    	$$self.$inject_state = $$props => {
    		if ('options' in $$props) $$invalidate(0, options = $$props.options);
    		if ('headerLevel' in $$props) $$invalidate(1, headerLevel = $$props.headerLevel);
    		if ('customStyles' in $$props) $$invalidate(2, customStyles = $$props.customStyles);
    		if ('isOpen' in $$props) $$invalidate(3, isOpen = $$props.isOpen);
    		if ('state' in $$props) $$invalidate(4, state = $$props.state);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*isOpen*/ 8) {
    			$$invalidate(4, state = isOpen ? "expanded" : "collapsed");
    		}
    	};

    	return [options, headerLevel, customStyles, isOpen, state, updatePanelStates_handler];
    }

    class AccordionItem extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$e, create_fragment$e, safe_not_equal, {
    			options: 0,
    			headerLevel: 1,
    			customStyles: 2,
    			isOpen: 3
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AccordionItem",
    			options,
    			id: create_fragment$e.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*options*/ ctx[0] === undefined && !('options' in props)) {
    			console.warn("<AccordionItem> was created without expected prop 'options'");
    		}

    		if (/*customStyles*/ ctx[2] === undefined && !('customStyles' in props)) {
    			console.warn("<AccordionItem> was created without expected prop 'customStyles'");
    		}

    		if (/*isOpen*/ ctx[3] === undefined && !('isOpen' in props)) {
    			console.warn("<AccordionItem> was created without expected prop 'isOpen'");
    		}
    	}

    	get options() {
    		throw new Error("<AccordionItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set options(value) {
    		throw new Error("<AccordionItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get headerLevel() {
    		throw new Error("<AccordionItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set headerLevel(value) {
    		throw new Error("<AccordionItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get customStyles() {
    		throw new Error("<AccordionItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set customStyles(value) {
    		throw new Error("<AccordionItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isOpen() {
    		throw new Error("<AccordionItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isOpen(value) {
    		throw new Error("<AccordionItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/lib/components/Accordion/Accordion.svelte generated by Svelte v3.48.0 */
    const file$c = "src/lib/components/Accordion/Accordion.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[3] = list[i];
    	child_ctx[5] = i;
    	return child_ctx;
    }

    // (53:2) {#each options.panelInfo as info, i}
    function create_each_block$1(ctx) {
    	let accordionitem;
    	let current;

    	accordionitem = new AccordionItem({
    			props: {
    				options: /*info*/ ctx[3],
    				headerLevel: /*options*/ ctx[0].headerLevel,
    				customStyles: /*options*/ ctx[0].styles,
    				isOpen: /*panelStates*/ ctx[1][/*i*/ ctx[5]]
    			},
    			$$inline: true
    		});

    	accordionitem.$on("updatePanelStates", /*updatePanelStates*/ ctx[2]);

    	const block = {
    		c: function create() {
    			create_component(accordionitem.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(accordionitem, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const accordionitem_changes = {};
    			if (dirty & /*options*/ 1) accordionitem_changes.options = /*info*/ ctx[3];
    			if (dirty & /*options*/ 1) accordionitem_changes.headerLevel = /*options*/ ctx[0].headerLevel;
    			if (dirty & /*options*/ 1) accordionitem_changes.customStyles = /*options*/ ctx[0].styles;
    			if (dirty & /*panelStates*/ 2) accordionitem_changes.isOpen = /*panelStates*/ ctx[1][/*i*/ ctx[5]];
    			accordionitem.$set(accordionitem_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(accordionitem.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(accordionitem.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(accordionitem, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(53:2) {#each options.panelInfo as info, i}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$d(ctx) {
    	let div;
    	let div_aria_multiselectable_value;
    	let div_style_value;
    	let current;
    	let each_value = /*options*/ ctx[0].panelInfo;
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div, "class", "accordion-main svelte-1v39kh7");
    			attr_dev(div, "aria-multiselectable", div_aria_multiselectable_value = /*options*/ ctx[0].multiselectable);
    			attr_dev(div, "style", div_style_value = /*options*/ ctx[0].styles[3]);
    			add_location(div, file$c, 47, 0, 1523);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*options, panelStates, updatePanelStates*/ 7) {
    				each_value = /*options*/ ctx[0].panelInfo;
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}

    			if (!current || dirty & /*options*/ 1 && div_aria_multiselectable_value !== (div_aria_multiselectable_value = /*options*/ ctx[0].multiselectable)) {
    				attr_dev(div, "aria-multiselectable", div_aria_multiselectable_value);
    			}

    			if (!current || dirty & /*options*/ 1 && div_style_value !== (div_style_value = /*options*/ ctx[0].styles[3])) {
    				attr_dev(div, "style", div_style_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$d.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$d($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Accordion', slots, []);

    	let { options = {
    		multiselectable: false,
    		headerLevel: null,
    		styles: ["", ""],
    		panelInfo: []
    	} } = $$props;

    	if (!options.styles) {
    		options.styles = [null, null, null, null];
    	}

    	let panelStates;

    	onMount(() => {
    		//Initially set all panelStates to be false
    		for (let i = 0; i < options.panelInfo.length; i++) {
    			panelStates.push(false);
    		}

    		$$invalidate(1, panelStates);
    	});

    	const updatePanelStates = event => {
    		// Determin index of panel to be expanded
    		const panelIndex = Number(event.detail.target.slice(6)) - 1;

    		// If panel at the index to be changed is already true, set to false (i.e. collapse the panel)
    		if (panelStates[panelIndex] === true) {
    			return $$invalidate(1, panelStates[panelIndex] = false, panelStates);
    		}

    		// If only one panel should be open at a time
    		if (!options.multiselectable) {
    			// Set all panels states to be false except at the panel to be expanded index
    			for (let i = 0; i < options.panelInfo.length; i++) {
    				if (i !== panelIndex) {
    					$$invalidate(1, panelStates[i] = false, panelStates);
    				} else if (i === panelIndex) {
    					$$invalidate(1, panelStates[i] = true, panelStates);
    				}
    			}
    		} else {
    			//Simply set the panel state at the given panel to be ture (i.e. expanded)
    			$$invalidate(1, panelStates[panelIndex] = true, panelStates); // If multiple panels can be open at any given time
    		}
    	};

    	const writable_props = ['options'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Accordion> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('options' in $$props) $$invalidate(0, options = $$props.options);
    	};

    	$$self.$capture_state = () => ({
    		onMount,
    		AccordionItem,
    		options,
    		panelStates,
    		updatePanelStates
    	});

    	$$self.$inject_state = $$props => {
    		if ('options' in $$props) $$invalidate(0, options = $$props.options);
    		if ('panelStates' in $$props) $$invalidate(1, panelStates = $$props.panelStates);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$invalidate(1, panelStates = []);
    	return [options, panelStates, updatePanelStates];
    }

    class Accordion extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$d, create_fragment$d, safe_not_equal, { options: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Accordion",
    			options,
    			id: create_fragment$d.name
    		});
    	}

    	get options() {
    		throw new Error("<Accordion>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set options(value) {
    		throw new Error("<Accordion>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/lib/components/Button.svelte generated by Svelte v3.48.0 */

    const file$b = "src/lib/components/Button.svelte";

    function create_fragment$c(ctx) {
    	let button;
    	let t;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			t = text(/*content*/ ctx[1]);
    			attr_dev(button, "id", /*id*/ ctx[2]);
    			attr_dev(button, "aria-label", /*label*/ ctx[3]);
    			attr_dev(button, "style", /*style*/ ctx[4]);
    			attr_dev(button, "class", "svelte-1mnwss7");
    			add_location(button, file$b, 14, 0, 392);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			append_dev(button, t);

    			if (!mounted) {
    				dispose = listen_dev(
    					button,
    					"click",
    					function () {
    						if (is_function(/*handleClick*/ ctx[0])) /*handleClick*/ ctx[0].apply(this, arguments);
    					},
    					false,
    					false,
    					false
    				);

    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, [dirty]) {
    			ctx = new_ctx;
    			if (dirty & /*content*/ 2) set_data_dev(t, /*content*/ ctx[1]);

    			if (dirty & /*id*/ 4) {
    				attr_dev(button, "id", /*id*/ ctx[2]);
    			}

    			if (dirty & /*label*/ 8) {
    				attr_dev(button, "aria-label", /*label*/ ctx[3]);
    			}

    			if (dirty & /*style*/ 16) {
    				attr_dev(button, "style", /*style*/ ctx[4]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$c.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$c($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Button', slots, []);
    	let { handleClick } = $$props;
    	let { content = '' } = $$props;
    	let { id = '' } = $$props;
    	let { label = '' } = $$props;
    	let { style = '' } = $$props;
    	const writable_props = ['handleClick', 'content', 'id', 'label', 'style'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Button> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('handleClick' in $$props) $$invalidate(0, handleClick = $$props.handleClick);
    		if ('content' in $$props) $$invalidate(1, content = $$props.content);
    		if ('id' in $$props) $$invalidate(2, id = $$props.id);
    		if ('label' in $$props) $$invalidate(3, label = $$props.label);
    		if ('style' in $$props) $$invalidate(4, style = $$props.style);
    	};

    	$$self.$capture_state = () => ({ handleClick, content, id, label, style });

    	$$self.$inject_state = $$props => {
    		if ('handleClick' in $$props) $$invalidate(0, handleClick = $$props.handleClick);
    		if ('content' in $$props) $$invalidate(1, content = $$props.content);
    		if ('id' in $$props) $$invalidate(2, id = $$props.id);
    		if ('label' in $$props) $$invalidate(3, label = $$props.label);
    		if ('style' in $$props) $$invalidate(4, style = $$props.style);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [handleClick, content, id, label, style];
    }

    class Button extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$c, create_fragment$c, safe_not_equal, {
    			handleClick: 0,
    			content: 1,
    			id: 2,
    			label: 3,
    			style: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Button",
    			options,
    			id: create_fragment$c.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*handleClick*/ ctx[0] === undefined && !('handleClick' in props)) {
    			console.warn("<Button> was created without expected prop 'handleClick'");
    		}
    	}

    	get handleClick() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set handleClick(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get content() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set content(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get id() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get label() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/client/components/Navbar.svelte generated by Svelte v3.48.0 */

    const file$a = "src/client/components/Navbar.svelte";

    function create_fragment$b(ctx) {
    	let link0;
    	let link1;
    	let link2;
    	let t0;
    	let nav;
    	let div0;
    	let t2;
    	let div1;
    	let ul0;
    	let li0;
    	let a0;
    	let t4;
    	let li1;
    	let a1;
    	let t6;
    	let li2;
    	let a2;
    	let t8;
    	let li3;
    	let a3;
    	let t10;
    	let hr0;
    	let t11;
    	let div2;
    	let t12;
    	let ul1;
    	let li4;
    	let a4;
    	let t14;
    	let li5;
    	let a5;
    	let t16;
    	let li6;
    	let a6;
    	let t18;
    	let li7;
    	let a7;
    	let t20;
    	let hr1;
    	let t21;
    	let div3;
    	let ul2;
    	let li8;
    	let a8;
    	let t23;
    	let li9;
    	let a9;

    	const block = {
    		c: function create() {
    			link0 = element("link");
    			link1 = element("link");
    			link2 = element("link");
    			t0 = space();
    			nav = element("nav");
    			div0 = element("div");
    			div0.textContent = "svve11";
    			t2 = space();
    			div1 = element("div");
    			ul0 = element("ul");
    			li0 = element("li");
    			a0 = element("a");
    			a0.textContent = "Home";
    			t4 = space();
    			li1 = element("li");
    			a1 = element("a");
    			a1.textContent = "GitHub";
    			t6 = space();
    			li2 = element("li");
    			a2 = element("a");
    			a2.textContent = "Blog";
    			t8 = space();
    			li3 = element("li");
    			a3 = element("a");
    			a3.textContent = "Svelte Community";
    			t10 = space();
    			hr0 = element("hr");
    			t11 = space();
    			div2 = element("div");
    			t12 = text("Components\n    ");
    			ul1 = element("ul");
    			li4 = element("li");
    			a4 = element("a");
    			a4.textContent = "Accordion";
    			t14 = space();
    			li5 = element("li");
    			a5 = element("a");
    			a5.textContent = "Button";
    			t16 = space();
    			li6 = element("li");
    			a6 = element("a");
    			a6.textContent = "Checkbox";
    			t18 = space();
    			li7 = element("li");
    			a7 = element("a");
    			a7.textContent = "Form";
    			t20 = space();
    			hr1 = element("hr");
    			t21 = space();
    			div3 = element("div");
    			ul2 = element("ul");
    			li8 = element("li");
    			a8 = element("a");
    			a8.textContent = "About the team";
    			t23 = space();
    			li9 = element("li");
    			a9 = element("a");
    			a9.textContent = "Blog";
    			attr_dev(link0, "rel", "preconnect");
    			attr_dev(link0, "href", "https://fonts.googleapis.com");
    			add_location(link0, file$a, 4, 2, 65);
    			attr_dev(link1, "rel", "preconnect");
    			attr_dev(link1, "href", "https://fonts.gstatic.com");
    			attr_dev(link1, "crossorigin", "");
    			add_location(link1, file$a, 5, 2, 129);
    			attr_dev(link2, "href", "https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap");
    			attr_dev(link2, "rel", "stylesheet");
    			add_location(link2, file$a, 6, 2, 202);
    			attr_dev(div0, "id", "logo");
    			attr_dev(div0, "class", "svelte-1sdzkel");
    			add_location(div0, file$a, 12, 2, 339);
    			attr_dev(a0, "href", "#");
    			attr_dev(a0, "class", "svelte-1sdzkel");
    			add_location(a0, file$a, 17, 10, 490);
    			attr_dev(li0, "class", "svelte-1sdzkel");
    			add_location(li0, file$a, 17, 6, 486);
    			attr_dev(a1, "href", "#");
    			attr_dev(a1, "class", "svelte-1sdzkel");
    			add_location(a1, file$a, 18, 10, 526);
    			attr_dev(li1, "class", "svelte-1sdzkel");
    			add_location(li1, file$a, 18, 6, 522);
    			attr_dev(a2, "href", "#");
    			attr_dev(a2, "class", "svelte-1sdzkel");
    			add_location(a2, file$a, 19, 10, 564);
    			attr_dev(li2, "class", "svelte-1sdzkel");
    			add_location(li2, file$a, 19, 6, 560);
    			attr_dev(a3, "href", "#");
    			attr_dev(a3, "class", "svelte-1sdzkel");
    			add_location(a3, file$a, 20, 10, 600);
    			attr_dev(li3, "class", "svelte-1sdzkel");
    			add_location(li3, file$a, 20, 6, 596);
    			attr_dev(ul0, "class", "svelte-1sdzkel");
    			add_location(ul0, file$a, 16, 4, 475);
    			attr_dev(div1, "id", "head");
    			add_location(div1, file$a, 15, 2, 455);
    			attr_dev(hr0, "aria-hidden", "true");
    			attr_dev(hr0, "class", "border svelte-1sdzkel");
    			add_location(hr0, file$a, 23, 2, 659);
    			attr_dev(a4, "href", "#");
    			attr_dev(a4, "class", "svelte-1sdzkel");
    			add_location(a4, file$a, 27, 10, 752);
    			attr_dev(li4, "class", "svelte-1sdzkel");
    			add_location(li4, file$a, 27, 6, 748);
    			attr_dev(a5, "href", "#");
    			attr_dev(a5, "class", "svelte-1sdzkel");
    			add_location(a5, file$a, 28, 10, 793);
    			attr_dev(li5, "class", "svelte-1sdzkel");
    			add_location(li5, file$a, 28, 6, 789);
    			attr_dev(a6, "href", "#");
    			attr_dev(a6, "class", "svelte-1sdzkel");
    			add_location(a6, file$a, 29, 10, 831);
    			attr_dev(li6, "class", "svelte-1sdzkel");
    			add_location(li6, file$a, 29, 6, 827);
    			attr_dev(a7, "href", "#");
    			attr_dev(a7, "class", "svelte-1sdzkel");
    			add_location(a7, file$a, 30, 10, 871);
    			attr_dev(li7, "class", "svelte-1sdzkel");
    			add_location(li7, file$a, 30, 6, 867);
    			attr_dev(ul1, "class", "svelte-1sdzkel");
    			add_location(ul1, file$a, 26, 4, 737);
    			attr_dev(div2, "id", "main");
    			add_location(div2, file$a, 24, 2, 702);
    			attr_dev(hr1, "aria-hidden", "true");
    			attr_dev(hr1, "class", "border svelte-1sdzkel");
    			add_location(hr1, file$a, 34, 2, 919);
    			attr_dev(a8, "href", "#");
    			attr_dev(a8, "class", "svelte-1sdzkel");
    			add_location(a8, file$a, 38, 10, 1002);
    			attr_dev(li8, "class", "svelte-1sdzkel");
    			add_location(li8, file$a, 38, 6, 998);
    			attr_dev(a9, "href", "#");
    			attr_dev(a9, "class", "svelte-1sdzkel");
    			add_location(a9, file$a, 39, 10, 1048);
    			attr_dev(li9, "class", "svelte-1sdzkel");
    			add_location(li9, file$a, 39, 6, 1044);
    			attr_dev(ul2, "class", "svelte-1sdzkel");
    			add_location(ul2, file$a, 37, 4, 987);
    			attr_dev(div3, "class", "other");
    			add_location(div3, file$a, 36, 2, 963);
    			attr_dev(nav, "id", /*id*/ ctx[0]);
    			attr_dev(nav, "class", "svelte-1sdzkel");
    			add_location(nav, file$a, 11, 0, 326);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			append_dev(document.head, link0);
    			append_dev(document.head, link1);
    			append_dev(document.head, link2);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, nav, anchor);
    			append_dev(nav, div0);
    			append_dev(nav, t2);
    			append_dev(nav, div1);
    			append_dev(div1, ul0);
    			append_dev(ul0, li0);
    			append_dev(li0, a0);
    			append_dev(ul0, t4);
    			append_dev(ul0, li1);
    			append_dev(li1, a1);
    			append_dev(ul0, t6);
    			append_dev(ul0, li2);
    			append_dev(li2, a2);
    			append_dev(ul0, t8);
    			append_dev(ul0, li3);
    			append_dev(li3, a3);
    			append_dev(nav, t10);
    			append_dev(nav, hr0);
    			append_dev(nav, t11);
    			append_dev(nav, div2);
    			append_dev(div2, t12);
    			append_dev(div2, ul1);
    			append_dev(ul1, li4);
    			append_dev(li4, a4);
    			append_dev(ul1, t14);
    			append_dev(ul1, li5);
    			append_dev(li5, a5);
    			append_dev(ul1, t16);
    			append_dev(ul1, li6);
    			append_dev(li6, a6);
    			append_dev(ul1, t18);
    			append_dev(ul1, li7);
    			append_dev(li7, a7);
    			append_dev(nav, t20);
    			append_dev(nav, hr1);
    			append_dev(nav, t21);
    			append_dev(nav, div3);
    			append_dev(div3, ul2);
    			append_dev(ul2, li8);
    			append_dev(li8, a8);
    			append_dev(ul2, t23);
    			append_dev(ul2, li9);
    			append_dev(li9, a9);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*id*/ 1) {
    				attr_dev(nav, "id", /*id*/ ctx[0]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			detach_dev(link0);
    			detach_dev(link1);
    			detach_dev(link2);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(nav);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$b.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$b($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Navbar', slots, []);
    	let { id = '' } = $$props;
    	const writable_props = ['id'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Navbar> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('id' in $$props) $$invalidate(0, id = $$props.id);
    	};

    	$$self.$capture_state = () => ({ id });

    	$$self.$inject_state = $$props => {
    		if ('id' in $$props) $$invalidate(0, id = $$props.id);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [id];
    }

    class Navbar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$b, create_fragment$b, safe_not_equal, { id: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Navbar",
    			options,
    			id: create_fragment$b.name
    		});
    	}

    	get id() {
    		throw new Error("<Navbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<Navbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/client/components/PropsTable.svelte generated by Svelte v3.48.0 */

    const file$9 = "src/client/components/PropsTable.svelte";

    function create_fragment$a(ctx) {
    	let div;
    	let table;
    	let thead;
    	let tr0;
    	let th0;
    	let t1;
    	let th1;
    	let t3;
    	let th2;
    	let t5;
    	let th3;
    	let t7;
    	let tbody;
    	let tr1;
    	let td0;
    	let a0;
    	let code0;
    	let t9;
    	let td1;
    	let code1;
    	let t11;
    	let td2;
    	let t13;
    	let td3;
    	let code2;
    	let t15;
    	let tr2;
    	let td4;
    	let a1;
    	let code3;
    	let t17;
    	let td5;
    	let code4;
    	let t19;
    	let td6;
    	let t21;
    	let td7;
    	let t23;
    	let tr3;
    	let td8;
    	let a2;
    	let code5;
    	let t25;
    	let td9;
    	let code6;
    	let t27;
    	let code7;
    	let t29;
    	let td10;
    	let t31;
    	let td11;
    	let t33;
    	let tr4;
    	let td12;
    	let a3;
    	let code8;
    	let t35;
    	let td13;
    	let code9;
    	let t37;
    	let code10;
    	let t39;
    	let td14;
    	let t41;
    	let td15;

    	const block = {
    		c: function create() {
    			div = element("div");
    			table = element("table");
    			thead = element("thead");
    			tr0 = element("tr");
    			th0 = element("th");
    			th0.textContent = "Prop";
    			t1 = space();
    			th1 = element("th");
    			th1.textContent = "Type";
    			t3 = space();
    			th2 = element("th");
    			th2.textContent = "Required";
    			t5 = space();
    			th3 = element("th");
    			th3.textContent = "Default Value";
    			t7 = space();
    			tbody = element("tbody");
    			tr1 = element("tr");
    			td0 = element("td");
    			a0 = element("a");
    			code0 = element("code");
    			code0.textContent = "multiselectable";
    			t9 = space();
    			td1 = element("td");
    			code1 = element("code");
    			code1.textContent = "boolean";
    			t11 = space();
    			td2 = element("td");
    			td2.textContent = "false";
    			t13 = space();
    			td3 = element("td");
    			code2 = element("code");
    			code2.textContent = "true";
    			t15 = space();
    			tr2 = element("tr");
    			td4 = element("td");
    			a1 = element("a");
    			code3 = element("code");
    			code3.textContent = "headerLevel";
    			t17 = space();
    			td5 = element("td");
    			code4 = element("code");
    			code4.textContent = "number";
    			t19 = space();
    			td6 = element("td");
    			td6.textContent = "true";
    			t21 = space();
    			td7 = element("td");
    			td7.textContent = "N/A";
    			t23 = space();
    			tr3 = element("tr");
    			td8 = element("td");
    			a2 = element("a");
    			code5 = element("code");
    			code5.textContent = "styles";
    			t25 = space();
    			td9 = element("td");
    			code6 = element("code");
    			code6.textContent = "array";
    			t27 = text(" of ");
    			code7 = element("code");
    			code7.textContent = "strings";
    			t29 = space();
    			td10 = element("td");
    			td10.textContent = "false";
    			t31 = space();
    			td11 = element("td");
    			td11.textContent = "N/A";
    			t33 = space();
    			tr4 = element("tr");
    			td12 = element("td");
    			a3 = element("a");
    			code8 = element("code");
    			code8.textContent = "panelInfo";
    			t35 = space();
    			td13 = element("td");
    			code9 = element("code");
    			code9.textContent = "array";
    			t37 = text(" of ");
    			code10 = element("code");
    			code10.textContent = "objects";
    			t39 = space();
    			td14 = element("td");
    			td14.textContent = "false";
    			t41 = space();
    			td15 = element("td");
    			td15.textContent = "N/A";
    			add_location(th0, file$9, 4, 8, 128);
    			add_location(th1, file$9, 5, 8, 150);
    			add_location(th2, file$9, 6, 8, 172);
    			add_location(th3, file$9, 7, 8, 198);
    			add_location(tr0, file$9, 3, 6, 115);
    			attr_dev(thead, "class", "svelte-5lvvkc");
    			add_location(thead, file$9, 2, 4, 101);
    			attr_dev(code0, "class", "svelte-5lvvkc");
    			add_location(code0, file$9, 12, 24, 293);
    			attr_dev(a0, "href", "#");
    			attr_dev(a0, "class", "svelte-5lvvkc");
    			add_location(a0, file$9, 12, 12, 281);
    			add_location(td0, file$9, 12, 8, 277);
    			attr_dev(code1, "class", "svelte-5lvvkc");
    			add_location(code1, file$9, 13, 12, 343);
    			add_location(td1, file$9, 13, 8, 339);
    			add_location(td2, file$9, 14, 8, 377);
    			attr_dev(code2, "class", "svelte-5lvvkc");
    			add_location(code2, file$9, 15, 12, 404);
    			add_location(td3, file$9, 15, 8, 400);
    			add_location(tr1, file$9, 11, 6, 264);
    			attr_dev(code3, "class", "svelte-5lvvkc");
    			add_location(code3, file$9, 18, 24, 474);
    			attr_dev(a1, "href", "#");
    			attr_dev(a1, "class", "svelte-5lvvkc");
    			add_location(a1, file$9, 18, 12, 462);
    			add_location(td4, file$9, 18, 8, 458);
    			attr_dev(code4, "class", "svelte-5lvvkc");
    			add_location(code4, file$9, 19, 12, 520);
    			add_location(td5, file$9, 19, 8, 516);
    			add_location(td6, file$9, 20, 8, 553);
    			add_location(td7, file$9, 21, 8, 575);
    			add_location(tr2, file$9, 17, 6, 445);
    			attr_dev(code5, "class", "svelte-5lvvkc");
    			add_location(code5, file$9, 24, 24, 635);
    			attr_dev(a2, "href", "#");
    			attr_dev(a2, "class", "svelte-5lvvkc");
    			add_location(a2, file$9, 24, 12, 623);
    			add_location(td8, file$9, 24, 8, 619);
    			attr_dev(code6, "class", "svelte-5lvvkc");
    			add_location(code6, file$9, 25, 12, 676);
    			attr_dev(code7, "class", "svelte-5lvvkc");
    			add_location(code7, file$9, 25, 34, 698);
    			add_location(td9, file$9, 25, 8, 672);
    			add_location(td10, file$9, 26, 8, 732);
    			add_location(td11, file$9, 27, 8, 755);
    			add_location(tr3, file$9, 23, 6, 606);
    			attr_dev(code8, "class", "svelte-5lvvkc");
    			add_location(code8, file$9, 30, 24, 815);
    			attr_dev(a3, "href", "#");
    			attr_dev(a3, "class", "svelte-5lvvkc");
    			add_location(a3, file$9, 30, 12, 803);
    			add_location(td12, file$9, 30, 8, 799);
    			attr_dev(code9, "class", "svelte-5lvvkc");
    			add_location(code9, file$9, 31, 12, 859);
    			attr_dev(code10, "class", "svelte-5lvvkc");
    			add_location(code10, file$9, 31, 34, 881);
    			add_location(td13, file$9, 31, 8, 855);
    			add_location(td14, file$9, 32, 8, 915);
    			add_location(td15, file$9, 33, 8, 938);
    			add_location(tr4, file$9, 29, 6, 786);
    			attr_dev(tbody, "class", "svelte-5lvvkc");
    			add_location(tbody, file$9, 10, 4, 250);
    			attr_dev(table, "id", "props-table");
    			attr_dev(table, "class", "svelte-5lvvkc");
    			add_location(table, file$9, 1, 2, 72);
    			attr_dev(div, "role", "region");
    			attr_dev(div, "tabindex", "0");
    			set_style(div, "max-width", "100%");
    			set_style(div, "overflow", "auto");
    			add_location(div, file$9, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, table);
    			append_dev(table, thead);
    			append_dev(thead, tr0);
    			append_dev(tr0, th0);
    			append_dev(tr0, t1);
    			append_dev(tr0, th1);
    			append_dev(tr0, t3);
    			append_dev(tr0, th2);
    			append_dev(tr0, t5);
    			append_dev(tr0, th3);
    			append_dev(table, t7);
    			append_dev(table, tbody);
    			append_dev(tbody, tr1);
    			append_dev(tr1, td0);
    			append_dev(td0, a0);
    			append_dev(a0, code0);
    			append_dev(tr1, t9);
    			append_dev(tr1, td1);
    			append_dev(td1, code1);
    			append_dev(tr1, t11);
    			append_dev(tr1, td2);
    			append_dev(tr1, t13);
    			append_dev(tr1, td3);
    			append_dev(td3, code2);
    			append_dev(tbody, t15);
    			append_dev(tbody, tr2);
    			append_dev(tr2, td4);
    			append_dev(td4, a1);
    			append_dev(a1, code3);
    			append_dev(tr2, t17);
    			append_dev(tr2, td5);
    			append_dev(td5, code4);
    			append_dev(tr2, t19);
    			append_dev(tr2, td6);
    			append_dev(tr2, t21);
    			append_dev(tr2, td7);
    			append_dev(tbody, t23);
    			append_dev(tbody, tr3);
    			append_dev(tr3, td8);
    			append_dev(td8, a2);
    			append_dev(a2, code5);
    			append_dev(tr3, t25);
    			append_dev(tr3, td9);
    			append_dev(td9, code6);
    			append_dev(td9, t27);
    			append_dev(td9, code7);
    			append_dev(tr3, t29);
    			append_dev(tr3, td10);
    			append_dev(tr3, t31);
    			append_dev(tr3, td11);
    			append_dev(tbody, t33);
    			append_dev(tbody, tr4);
    			append_dev(tr4, td12);
    			append_dev(td12, a3);
    			append_dev(a3, code8);
    			append_dev(tr4, t35);
    			append_dev(tr4, td13);
    			append_dev(td13, code9);
    			append_dev(td13, t37);
    			append_dev(td13, code10);
    			append_dev(tr4, t39);
    			append_dev(tr4, td14);
    			append_dev(tr4, t41);
    			append_dev(tr4, td15);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$a.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$a($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('PropsTable', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<PropsTable> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class PropsTable extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$a, create_fragment$a, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PropsTable",
    			options,
    			id: create_fragment$a.name
    		});
    	}
    }

    /* src/client/components/CodeSample.svelte generated by Svelte v3.48.0 */

    const file$8 = "src/client/components/CodeSample.svelte";

    function create_fragment$9(ctx) {
    	let textarea;
    	let textarea_value_value;
    	let t0;
    	let button;

    	const block = {
    		c: function create() {
    			textarea = element("textarea");
    			t0 = space();
    			button = element("button");
    			button.textContent = "Copy";
    			attr_dev(textarea, "class", "code-area svelte-1hy09m1");
    			textarea.value = textarea_value_value = "  " + /*code*/ ctx[0] + "\n";
    			add_location(textarea, file$8, 7, 0, 138);
    			attr_dev(button, "class", "svelte-1hy09m1");
    			add_location(button, file$8, 10, 0, 188);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, textarea, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, button, anchor);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*code*/ 1 && textarea_value_value !== (textarea_value_value = "  " + /*code*/ ctx[0] + "\n")) {
    				prop_dev(textarea, "value", textarea_value_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(textarea);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(button);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$9.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$9($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('CodeSample', slots, []);
    	let { code = '' } = $$props;

    	const copyCode = event => {
    		const code = event.target.value;
    		alert(code);
    	};

    	const writable_props = ['code'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<CodeSample> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('code' in $$props) $$invalidate(0, code = $$props.code);
    	};

    	$$self.$capture_state = () => ({ code, copyCode });

    	$$self.$inject_state = $$props => {
    		if ('code' in $$props) $$invalidate(0, code = $$props.code);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [code];
    }

    class CodeSample extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$9, create_fragment$9, safe_not_equal, { code: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "CodeSample",
    			options,
    			id: create_fragment$9.name
    		});
    	}

    	get code() {
    		throw new Error("<CodeSample>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set code(value) {
    		throw new Error("<CodeSample>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/client/pages/AccordionPage.svelte generated by Svelte v3.48.0 */
    const file$7 = "src/client/pages/AccordionPage.svelte";

    function create_fragment$8(ctx) {
    	let div9;
    	let div0;
    	let navbar;
    	let t0;
    	let div8;
    	let h1;
    	let t2;
    	let div1;
    	let a0;
    	let t4;
    	let a1;
    	let t6;
    	let a2;
    	let t8;
    	let a3;
    	let t10;
    	let br0;
    	let t11;
    	let div2;
    	let t12;
    	let a4;
    	let t13;
    	let t14;
    	let div3;
    	let t15;
    	let a5;
    	let t16;
    	let t17;
    	let div4;
    	let p0;
    	let t19;
    	let div5;
    	let fieldset0;
    	let legend0;
    	let t21;
    	let h20;
    	let t23;
    	let label;
    	let t25;
    	let codesample;
    	let t26;
    	let accordion;
    	let t27;
    	let div6;
    	let fieldset1;
    	let legend1;
    	let t29;
    	let h21;
    	let t31;
    	let p1;
    	let t32;
    	let code0;
    	let t34;
    	let code1;
    	let t36;
    	let t37;
    	let br1;
    	let t38;
    	let pre;
    	let code2;
    	let t40;
    	let div7;
    	let fieldset2;
    	let legend2;
    	let t42;
    	let h22;
    	let t44;
    	let h30;
    	let t46;
    	let propstable;
    	let t47;
    	let h31;
    	let current;
    	navbar = new Navbar({ props: { id: "navbar" }, $$inline: true });

    	codesample = new CodeSample({
    			props: {
    				code: `
            const options = {
              multiselectable: true,
              headerLevel: 4,
              // layout of styles array [headerStyle, panelStyles, ]
              styles: [
                'height: 50px; width: 100%; background-color: coral; border: 1px solid black',
                'background-color: yellow',
              ],
              panelInfo: [
                {
                  id: 1,
                  panelContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Cursus eget nunc scelerisque viverra mauris. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Nisl vel pretium lectus quam id. Ultrices eros in cursus turpis massa. Mauris pharetra et ultrices neque. Tristique senectus et netus et malesuada fames ac turpis. Turpis tincidunt id aliquet risus feugiat in ante metus. Pellentesque habitant morbi tristique senectus et netus et malesuada.',
                  headerTitle: 'First Section',
                },
                {
                  id: 2,
                  panelContent:
                    'Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ut enim blandit volutpat maecenas volutpat blandit. Mi ipsum faucibus vitae aliquet nec. Dui ut ornare lectus sit amet est placerat in. Convallis convallis tellus id interdum. Vitae aliquet nec ullamcorper sit amet risus. Eu mi bibendum neque egestas congue quisque egestas diam in. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Ullamcorper a lacus vestibulum sed. Vitae purus faucibus ornare suspendisse. Curabitur gravida arcu ac tortor dignissim convallis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Id leo in vitae turpis massa sed. Faucibus interdum posuere lorem ipsum dolor.',
                  headerTitle: 'Second Section',
                },
                {
                  id: 3,
                  panelContent:
                    'Velit egestas dui id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Feugiat nisl pretium fusce id velit ut tortor pretium. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Dolor sit amet consectetur adipiscing elit duis tristique. Pellentesque sit amet porttitor eget dolor. Vitae purus faucibus ornare suspendisse sed. Maecenas sed enim ut sem. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Mauris pharetra et ultrices neque ornare aenean euismod. Nec ultrices dui sapien eget mi proin sed. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Augue neque gravida in fermentum et sollicitudin ac orci. Risus in hendrerit gravida rutrum quisque non tellus. Nec dui nunc mattis enim ut tellus elementum. Eleifend mi in nulla posuere.',
                  headerTitle: 'Third Section',
                },
              ],
            };`
    			},
    			$$inline: true
    		});

    	accordion = new Accordion({
    			props: { options: /*options*/ ctx[0] },
    			$$inline: true
    		});

    	propstable = new PropsTable({ $$inline: true });

    	const block = {
    		c: function create() {
    			div9 = element("div");
    			div0 = element("div");
    			create_component(navbar.$$.fragment);
    			t0 = space();
    			div8 = element("div");
    			h1 = element("h1");
    			h1.textContent = `${componentName}`;
    			t2 = space();
    			div1 = element("div");
    			a0 = element("a");
    			a0.textContent = "Accordion Button";
    			t4 = text(" -\n      ");
    			a1 = element("a");
    			a1.textContent = "Accordion Header";
    			t6 = text(" -\n      ");
    			a2 = element("a");
    			a2.textContent = "Accordion Item";
    			t8 = text(" -\n      ");
    			a3 = element("a");
    			a3.textContent = "Accordion Panel";
    			t10 = space();
    			br0 = element("br");
    			t11 = space();
    			div2 = element("div");
    			t12 = text("Source: ");
    			a4 = element("a");
    			t13 = text(githubSourceLink);
    			t14 = space();
    			div3 = element("div");
    			t15 = text("WAI-ARIA: ");
    			a5 = element("a");
    			t16 = text(WAIARIApracticesLink);
    			t17 = space();
    			div4 = element("div");
    			p0 = element("p");
    			p0.textContent = "An accordion is a vertically stacked set of interactive headings that\n        each contain a title, content snippet, or thumbnail representing a\n        section of content. The headings function as controls that enable users\n        to reveal or hide their associated sections of content. Accordions are\n        commonly used to reduce the need to scroll when presenting multiple\n        sections of content on a single page.";
    			t19 = space();
    			div5 = element("div");
    			fieldset0 = element("fieldset");
    			legend0 = element("legend");
    			legend0.textContent = "Usage";
    			t21 = space();
    			h20 = element("h2");
    			h20.textContent = "Usage";
    			t23 = space();
    			label = element("label");
    			label.textContent = "Code example:";
    			t25 = space();
    			create_component(codesample.$$.fragment);
    			t26 = space();
    			create_component(accordion.$$.fragment);
    			t27 = space();
    			div6 = element("div");
    			fieldset1 = element("fieldset");
    			legend1 = element("legend");
    			legend1.textContent = "Installation";
    			t29 = space();
    			h21 = element("h2");
    			h21.textContent = "Installation";
    			t31 = space();
    			p1 = element("p");
    			t32 = text("From the command line in your project directory, run ");
    			code0 = element("code");
    			code0.textContent = "npm install @svve11/accordion";
    			t34 = text("\n          or ");
    			code1 = element("code");
    			code1.textContent = "yarn add @svve11/accordion";
    			t36 = text(". Then import the components\n          and styles that you need:");
    			t37 = space();
    			br1 = element("br");
    			t38 = space();
    			pre = element("pre");
    			code2 = element("code");
    			code2.textContent = "\n          npm install @svve11/accordion\n          # or\n          yarn add @svve11/accordion\n        ";
    			t40 = space();
    			div7 = element("div");
    			fieldset2 = element("fieldset");
    			legend2 = element("legend");
    			legend2.textContent = "Component API";
    			t42 = space();
    			h22 = element("h2");
    			h22.textContent = "Component API";
    			t44 = space();
    			h30 = element("h3");
    			h30.textContent = "Props";
    			t46 = space();
    			create_component(propstable.$$.fragment);
    			t47 = space();
    			h31 = element("h3");
    			h31.textContent = "CSS Selectors";
    			attr_dev(div0, "id", "nav-container");
    			attr_dev(div0, "class", "svelte-1e2zrrv");
    			add_location(div0, file$7, 58, 2, 3834);
    			attr_dev(h1, "class", "svelte-1e2zrrv");
    			add_location(h1, file$7, 62, 4, 3937);
    			attr_dev(a0, "href", "#");
    			attr_dev(a0, "class", "svelte-1e2zrrv");
    			add_location(a0, file$7, 66, 6, 4048);
    			attr_dev(a1, "href", "#");
    			attr_dev(a1, "class", "svelte-1e2zrrv");
    			add_location(a1, file$7, 67, 6, 4089);
    			attr_dev(a2, "href", "#");
    			attr_dev(a2, "class", "svelte-1e2zrrv");
    			add_location(a2, file$7, 68, 6, 4130);
    			attr_dev(a3, "href", "#");
    			attr_dev(a3, "class", "svelte-1e2zrrv");
    			add_location(a3, file$7, 69, 6, 4169);
    			attr_dev(div1, "id", "child-links");
    			attr_dev(div1, "class", "svelte-1e2zrrv");
    			add_location(div1, file$7, 65, 4, 4019);
    			attr_dev(br0, "class", "svelte-1e2zrrv");
    			add_location(br0, file$7, 71, 4, 4216);
    			attr_dev(a4, "href", githubSourceLink);
    			attr_dev(a4, "class", "svelte-1e2zrrv");
    			add_location(a4, file$7, 75, 14, 4296);
    			attr_dev(div2, "class", "svelte-1e2zrrv");
    			add_location(div2, file$7, 74, 4, 4276);
    			attr_dev(a5, "href", WAIARIApracticesLink);
    			attr_dev(a5, "class", "svelte-1e2zrrv");
    			add_location(a5, file$7, 80, 16, 4438);
    			attr_dev(div3, "class", "svelte-1e2zrrv");
    			add_location(div3, file$7, 79, 4, 4416);
    			attr_dev(p0, "class", "svelte-1e2zrrv");
    			add_location(p0, file$7, 85, 6, 4580);
    			attr_dev(div4, "id", "description");
    			attr_dev(div4, "class", "svelte-1e2zrrv");
    			add_location(div4, file$7, 84, 4, 4551);
    			attr_dev(legend0, "class", "svelte-1e2zrrv");
    			add_location(legend0, file$7, 98, 8, 5095);
    			attr_dev(h20, "class", "svelte-1e2zrrv");
    			add_location(h20, file$7, 99, 8, 5126);
    			attr_dev(label, "for", "");
    			attr_dev(label, "class", "svelte-1e2zrrv");
    			add_location(label, file$7, 101, 8, 5179);
    			attr_dev(fieldset0, "class", "svelte-1e2zrrv");
    			add_location(fieldset0, file$7, 97, 6, 5076);
    			attr_dev(div5, "class", "svelte-1e2zrrv");
    			add_location(div5, file$7, 96, 4, 5064);
    			attr_dev(legend1, "class", "svelte-1e2zrrv");
    			add_location(legend1, file$7, 143, 8, 8554);
    			attr_dev(h21, "class", "svelte-1e2zrrv");
    			add_location(h21, file$7, 144, 8, 8592);
    			attr_dev(code0, "class", "svelte-1e2zrrv");
    			add_location(code0, file$7, 146, 63, 8689);
    			attr_dev(code1, "class", "svelte-1e2zrrv");
    			add_location(code1, file$7, 149, 13, 8769);
    			attr_dev(p1, "class", "svelte-1e2zrrv");
    			add_location(p1, file$7, 145, 8, 8622);
    			attr_dev(br1, "class", "svelte-1e2zrrv");
    			add_location(br1, file$7, 152, 8, 8894);
    			attr_dev(code2, "class", "svelte-1e2zrrv");
    			add_location(code2, file$7, 153, 13, 8914);
    			attr_dev(pre, "class", "svelte-1e2zrrv");
    			add_location(pre, file$7, 153, 8, 8909);
    			attr_dev(fieldset1, "class", "svelte-1e2zrrv");
    			add_location(fieldset1, file$7, 142, 6, 8535);
    			attr_dev(div6, "class", "svelte-1e2zrrv");
    			add_location(div6, file$7, 141, 4, 8523);
    			attr_dev(legend2, "class", "svelte-1e2zrrv");
    			add_location(legend2, file$7, 164, 8, 9127);
    			attr_dev(h22, "class", "svelte-1e2zrrv");
    			add_location(h22, file$7, 165, 8, 9166);
    			attr_dev(h30, "class", "svelte-1e2zrrv");
    			add_location(h30, file$7, 167, 8, 9220);
    			attr_dev(h31, "class", "svelte-1e2zrrv");
    			add_location(h31, file$7, 171, 8, 9298);
    			attr_dev(fieldset2, "class", "svelte-1e2zrrv");
    			add_location(fieldset2, file$7, 163, 6, 9108);
    			attr_dev(div7, "class", "svelte-1e2zrrv");
    			add_location(div7, file$7, 162, 4, 9096);
    			attr_dev(div8, "id", "content");
    			attr_dev(div8, "class", "svelte-1e2zrrv");
    			add_location(div8, file$7, 61, 2, 3914);
    			attr_dev(div9, "class", "page-component svelte-1e2zrrv");
    			add_location(div9, file$7, 56, 0, 3725);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div9, anchor);
    			append_dev(div9, div0);
    			mount_component(navbar, div0, null);
    			append_dev(div9, t0);
    			append_dev(div9, div8);
    			append_dev(div8, h1);
    			append_dev(div8, t2);
    			append_dev(div8, div1);
    			append_dev(div1, a0);
    			append_dev(div1, t4);
    			append_dev(div1, a1);
    			append_dev(div1, t6);
    			append_dev(div1, a2);
    			append_dev(div1, t8);
    			append_dev(div1, a3);
    			append_dev(div8, t10);
    			append_dev(div8, br0);
    			append_dev(div8, t11);
    			append_dev(div8, div2);
    			append_dev(div2, t12);
    			append_dev(div2, a4);
    			append_dev(a4, t13);
    			append_dev(div8, t14);
    			append_dev(div8, div3);
    			append_dev(div3, t15);
    			append_dev(div3, a5);
    			append_dev(a5, t16);
    			append_dev(div8, t17);
    			append_dev(div8, div4);
    			append_dev(div4, p0);
    			append_dev(div8, t19);
    			append_dev(div8, div5);
    			append_dev(div5, fieldset0);
    			append_dev(fieldset0, legend0);
    			append_dev(fieldset0, t21);
    			append_dev(fieldset0, h20);
    			append_dev(fieldset0, t23);
    			append_dev(fieldset0, label);
    			append_dev(fieldset0, t25);
    			mount_component(codesample, fieldset0, null);
    			append_dev(fieldset0, t26);
    			mount_component(accordion, fieldset0, null);
    			append_dev(div8, t27);
    			append_dev(div8, div6);
    			append_dev(div6, fieldset1);
    			append_dev(fieldset1, legend1);
    			append_dev(fieldset1, t29);
    			append_dev(fieldset1, h21);
    			append_dev(fieldset1, t31);
    			append_dev(fieldset1, p1);
    			append_dev(p1, t32);
    			append_dev(p1, code0);
    			append_dev(p1, t34);
    			append_dev(p1, code1);
    			append_dev(p1, t36);
    			append_dev(fieldset1, t37);
    			append_dev(fieldset1, br1);
    			append_dev(fieldset1, t38);
    			append_dev(fieldset1, pre);
    			append_dev(pre, code2);
    			append_dev(div8, t40);
    			append_dev(div8, div7);
    			append_dev(div7, fieldset2);
    			append_dev(fieldset2, legend2);
    			append_dev(fieldset2, t42);
    			append_dev(fieldset2, h22);
    			append_dev(fieldset2, t44);
    			append_dev(fieldset2, h30);
    			append_dev(fieldset2, t46);
    			mount_component(propstable, fieldset2, null);
    			append_dev(fieldset2, t47);
    			append_dev(fieldset2, h31);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navbar.$$.fragment, local);
    			transition_in(codesample.$$.fragment, local);
    			transition_in(accordion.$$.fragment, local);
    			transition_in(propstable.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navbar.$$.fragment, local);
    			transition_out(codesample.$$.fragment, local);
    			transition_out(accordion.$$.fragment, local);
    			transition_out(propstable.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div9);
    			destroy_component(navbar);
    			destroy_component(codesample);
    			destroy_component(accordion);
    			destroy_component(propstable);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const componentName = 'Accordion';
    const githubSourceLink = 'https://github.com/Svve11/';
    const WAIARIApracticesLink = 'https://www.w3.org/TR/wai-aria-practices-1.1/#accordion';

    function instance$8($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('AccordionPage', slots, []);

    	const options = {
    		multiselectable: true,
    		headerLevel: 4,
    		//layout of styles array [headerStyle, panelStyles, ]
    		styles: [
    			'height: 50px; width: 100%; background-color: coral; border: 1px solid black',
    			'background-color: yellow'
    		],
    		panelInfo: [
    			{
    				id: 1,
    				panelContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Cursus eget nunc scelerisque viverra mauris. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Nisl vel pretium lectus quam id. Ultrices eros in cursus turpis massa. Mauris pharetra et ultrices neque. Tristique senectus et netus et malesuada fames ac turpis. Turpis tincidunt id aliquet risus feugiat in ante metus. Pellentesque habitant morbi tristique senectus et netus et malesuada.',
    				headerTitle: 'First Section'
    			},
    			{
    				id: 2,
    				panelContent: 'Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ut enim blandit volutpat maecenas volutpat blandit. Mi ipsum faucibus vitae aliquet nec. Dui ut ornare lectus sit amet est placerat in. Convallis convallis tellus id interdum. Vitae aliquet nec ullamcorper sit amet risus. Eu mi bibendum neque egestas congue quisque egestas diam in. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Ullamcorper a lacus vestibulum sed. Vitae purus faucibus ornare suspendisse. Curabitur gravida arcu ac tortor dignissim convallis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Id leo in vitae turpis massa sed. Faucibus interdum posuere lorem ipsum dolor.',
    				headerTitle: 'Second Section'
    			},
    			{
    				id: 3,
    				panelContent: 'Velit egestas dui id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Feugiat nisl pretium fusce id velit ut tortor pretium. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Dolor sit amet consectetur adipiscing elit duis tristique. Pellentesque sit amet porttitor eget dolor. Vitae purus faucibus ornare suspendisse sed. Maecenas sed enim ut sem. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Mauris pharetra et ultrices neque ornare aenean euismod. Nec ultrices dui sapien eget mi proin sed. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Augue neque gravida in fermentum et sollicitudin ac orci. Risus in hendrerit gravida rutrum quisque non tellus. Nec dui nunc mattis enim ut tellus elementum. Eleifend mi in nulla posuere.',
    				headerTitle: 'Third Section'
    			}
    		]
    	};

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<AccordionPage> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Accordion,
    		Button,
    		Navbar,
    		PropsTable,
    		CodeSample,
    		componentName,
    		githubSourceLink,
    		WAIARIApracticesLink,
    		options
    	});

    	return [options];
    }

    class AccordionPage extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AccordionPage",
    			options,
    			id: create_fragment$8.name
    		});
    	}
    }

    /* src/client/Home.svelte generated by Svelte v3.48.0 */
    const file$6 = "src/client/Home.svelte";

    function create_fragment$7(ctx) {
    	let div5;
    	let div0;
    	let navbar;
    	let t0;
    	let div4;
    	let div3;
    	let div1;
    	let i0;
    	let h1;
    	let t2;
    	let h3;
    	let t3;
    	let br;
    	let t4;
    	let i1;
    	let t6;
    	let div2;
    	let pre;
    	let code;
    	let current;
    	navbar = new Navbar({ props: { id: "navbar" }, $$inline: true });

    	const block = {
    		c: function create() {
    			div5 = element("div");
    			div0 = element("div");
    			create_component(navbar.$$.fragment);
    			t0 = space();
    			div4 = element("div");
    			div3 = element("div");
    			div1 = element("div");
    			i0 = element("i");
    			h1 = element("h1");
    			h1.textContent = "The power of the Web is in its universality. Access by everyone\n            regardless of disability is an essential aspect.";
    			t2 = space();
    			h3 = element("h3");
    			t3 = text("Tim Berners-Lee ");
    			br = element("br");
    			t4 = space();
    			i1 = element("i");
    			i1.textContent = "Creator of World Wide Web";
    			t6 = space();
    			div2 = element("div");
    			pre = element("pre");
    			code = element("code");
    			code.textContent = "\n          npm install @svve11\n        ";
    			attr_dev(div0, "id", "nav-container");
    			attr_dev(div0, "class", "svelte-1dsv9ma");
    			add_location(div0, file$6, 6, 2, 180);
    			attr_dev(h1, "id", "blurb-quote");
    			attr_dev(h1, "class", "svelte-1dsv9ma");
    			add_location(h1, file$6, 14, 11, 369);
    			attr_dev(i0, "class", "svelte-1dsv9ma");
    			add_location(i0, file$6, 13, 8, 355);
    			attr_dev(br, "class", "svelte-1dsv9ma");
    			add_location(br, file$6, 20, 26, 619);
    			attr_dev(i1, "class", "svelte-1dsv9ma");
    			add_location(i1, file$6, 21, 10, 636);
    			attr_dev(h3, "id", "blurb-attribution");
    			attr_dev(h3, "class", "svelte-1dsv9ma");
    			add_location(h3, file$6, 19, 8, 565);
    			attr_dev(div1, "id", "blurb");
    			attr_dev(div1, "class", "svelte-1dsv9ma");
    			add_location(div1, file$6, 12, 6, 330);
    			attr_dev(code, "class", "svelte-1dsv9ma");
    			add_location(code, file$6, 26, 13, 762);
    			attr_dev(pre, "class", "svelte-1dsv9ma");
    			add_location(pre, file$6, 26, 8, 757);
    			attr_dev(div2, "id", "pane2");
    			attr_dev(div2, "class", "svelte-1dsv9ma");
    			add_location(div2, file$6, 24, 6, 702);
    			attr_dev(div3, "id", "splash");
    			attr_dev(div3, "class", "svelte-1dsv9ma");
    			add_location(div3, file$6, 11, 4, 306);
    			attr_dev(div4, "id", "content");
    			attr_dev(div4, "class", "svelte-1dsv9ma");
    			add_location(div4, file$6, 9, 2, 260);
    			attr_dev(div5, "class", "page-component svelte-1dsv9ma");
    			add_location(div5, file$6, 4, 0, 71);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div5, anchor);
    			append_dev(div5, div0);
    			mount_component(navbar, div0, null);
    			append_dev(div5, t0);
    			append_dev(div5, div4);
    			append_dev(div4, div3);
    			append_dev(div3, div1);
    			append_dev(div1, i0);
    			append_dev(i0, h1);
    			append_dev(div1, t2);
    			append_dev(div1, h3);
    			append_dev(h3, t3);
    			append_dev(h3, br);
    			append_dev(h3, t4);
    			append_dev(h3, i1);
    			append_dev(div3, t6);
    			append_dev(div3, div2);
    			append_dev(div2, pre);
    			append_dev(pre, code);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navbar.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navbar.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div5);
    			destroy_component(navbar);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Home', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Home> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Navbar });
    	return [];
    }

    class Home extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Home",
    			options,
    			id: create_fragment$7.name
    		});
    	}
    }

    /* src/client/demo/InaccessibleAccordion/InaccessibleAccordionPanel.svelte generated by Svelte v3.48.0 */

    const file$5 = "src/client/demo/InaccessibleAccordion/InaccessibleAccordionPanel.svelte";

    // (17:2) {#if isOpen}
    function create_if_block$1(ctx) {
    	let p;
    	let t;

    	const block = {
    		c: function create() {
    			p = element("p");
    			t = text(/*panelContent*/ ctx[0]);
    			add_location(p, file$5, 17, 4, 277);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			append_dev(p, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*panelContent*/ 1) set_data_dev(t, /*panelContent*/ ctx[0]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(17:2) {#if isOpen}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$6(ctx) {
    	let div;
    	let if_block = /*isOpen*/ ctx[1] && create_if_block$1(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (if_block) if_block.c();
    			attr_dev(div, "class", "accordion-panel svelte-1yos4b4");
    			attr_dev(div, "role", "region");
    			attr_dev(div, "id", /*panelID*/ ctx[2]);
    			attr_dev(div, "style", /*style*/ ctx[3]);
    			toggle_class(div, "open-panel", /*isOpen*/ ctx[1]);
    			add_location(div, file$5, 9, 0, 156);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			if (if_block) if_block.m(div, null);
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*isOpen*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$1(ctx);
    					if_block.c();
    					if_block.m(div, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*panelID*/ 4) {
    				attr_dev(div, "id", /*panelID*/ ctx[2]);
    			}

    			if (dirty & /*style*/ 8) {
    				attr_dev(div, "style", /*style*/ ctx[3]);
    			}

    			if (dirty & /*isOpen*/ 2) {
    				toggle_class(div, "open-panel", /*isOpen*/ ctx[1]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (if_block) if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('InaccessibleAccordionPanel', slots, []);
    	let { panelContent = "" } = $$props;
    	let { isOpen } = $$props;
    	let { panelID } = $$props;
    	let { labeledBy } = $$props;
    	let { style } = $$props;
    	const writable_props = ['panelContent', 'isOpen', 'panelID', 'labeledBy', 'style'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<InaccessibleAccordionPanel> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('panelContent' in $$props) $$invalidate(0, panelContent = $$props.panelContent);
    		if ('isOpen' in $$props) $$invalidate(1, isOpen = $$props.isOpen);
    		if ('panelID' in $$props) $$invalidate(2, panelID = $$props.panelID);
    		if ('labeledBy' in $$props) $$invalidate(4, labeledBy = $$props.labeledBy);
    		if ('style' in $$props) $$invalidate(3, style = $$props.style);
    	};

    	$$self.$capture_state = () => ({
    		panelContent,
    		isOpen,
    		panelID,
    		labeledBy,
    		style
    	});

    	$$self.$inject_state = $$props => {
    		if ('panelContent' in $$props) $$invalidate(0, panelContent = $$props.panelContent);
    		if ('isOpen' in $$props) $$invalidate(1, isOpen = $$props.isOpen);
    		if ('panelID' in $$props) $$invalidate(2, panelID = $$props.panelID);
    		if ('labeledBy' in $$props) $$invalidate(4, labeledBy = $$props.labeledBy);
    		if ('style' in $$props) $$invalidate(3, style = $$props.style);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [panelContent, isOpen, panelID, style, labeledBy];
    }

    class InaccessibleAccordionPanel extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {
    			panelContent: 0,
    			isOpen: 1,
    			panelID: 2,
    			labeledBy: 4,
    			style: 3
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "InaccessibleAccordionPanel",
    			options,
    			id: create_fragment$6.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*isOpen*/ ctx[1] === undefined && !('isOpen' in props)) {
    			console.warn("<InaccessibleAccordionPanel> was created without expected prop 'isOpen'");
    		}

    		if (/*panelID*/ ctx[2] === undefined && !('panelID' in props)) {
    			console.warn("<InaccessibleAccordionPanel> was created without expected prop 'panelID'");
    		}

    		if (/*labeledBy*/ ctx[4] === undefined && !('labeledBy' in props)) {
    			console.warn("<InaccessibleAccordionPanel> was created without expected prop 'labeledBy'");
    		}

    		if (/*style*/ ctx[3] === undefined && !('style' in props)) {
    			console.warn("<InaccessibleAccordionPanel> was created without expected prop 'style'");
    		}
    	}

    	get panelContent() {
    		throw new Error("<InaccessibleAccordionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set panelContent(value) {
    		throw new Error("<InaccessibleAccordionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isOpen() {
    		throw new Error("<InaccessibleAccordionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isOpen(value) {
    		throw new Error("<InaccessibleAccordionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get panelID() {
    		throw new Error("<InaccessibleAccordionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set panelID(value) {
    		throw new Error("<InaccessibleAccordionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get labeledBy() {
    		throw new Error("<InaccessibleAccordionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set labeledBy(value) {
    		throw new Error("<InaccessibleAccordionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<InaccessibleAccordionPanel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<InaccessibleAccordionPanel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/client/demo/InaccessibleAccordion/InaccessibleAccordionButton.svelte generated by Svelte v3.48.0 */
    const file$4 = "src/client/demo/InaccessibleAccordion/InaccessibleAccordionButton.svelte";

    function create_fragment$5(ctx) {
    	let button;

    	let t_value = (/*headerTitle*/ ctx[0]
    	? /*headerTitle*/ ctx[0]
    	: "Please define header title in options object!") + "";

    	let t;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			t = text(t_value);
    			attr_dev(button, "class", "header-button svelte-1hp352r");
    			attr_dev(button, "id", /*id*/ ctx[1]);
    			attr_dev(button, "style", /*style*/ ctx[2]);
    			add_location(button, file$4, 20, 0, 448);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			append_dev(button, t);

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*click_handler*/ ctx[7], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*headerTitle*/ 1 && t_value !== (t_value = (/*headerTitle*/ ctx[0]
    			? /*headerTitle*/ ctx[0]
    			: "Please define header title in options object!") + "")) set_data_dev(t, t_value);

    			if (dirty & /*id*/ 2) {
    				attr_dev(button, "id", /*id*/ ctx[1]);
    			}

    			if (dirty & /*style*/ 4) {
    				attr_dev(button, "style", /*style*/ ctx[2]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('InaccessibleAccordionButton', slots, []);
    	let { headerTitle } = $$props;
    	let { controls } = $$props;
    	let { id } = $$props;
    	let { style } = $$props;
    	let { textToRead } = $$props;
    	let { isOpen } = $$props;
    	const dispatch = createEventDispatcher();

    	const handleHeaderClick = event => {
    		return dispatch("updatePanelStates", { target: event.target.id });
    	};

    	const writable_props = ['headerTitle', 'controls', 'id', 'style', 'textToRead', 'isOpen'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<InaccessibleAccordionButton> was created with unknown prop '${key}'`);
    	});

    	const click_handler = event => handleHeaderClick(event);

    	$$self.$$set = $$props => {
    		if ('headerTitle' in $$props) $$invalidate(0, headerTitle = $$props.headerTitle);
    		if ('controls' in $$props) $$invalidate(4, controls = $$props.controls);
    		if ('id' in $$props) $$invalidate(1, id = $$props.id);
    		if ('style' in $$props) $$invalidate(2, style = $$props.style);
    		if ('textToRead' in $$props) $$invalidate(5, textToRead = $$props.textToRead);
    		if ('isOpen' in $$props) $$invalidate(6, isOpen = $$props.isOpen);
    	};

    	$$self.$capture_state = () => ({
    		createEventDispatcher,
    		headerTitle,
    		controls,
    		id,
    		style,
    		textToRead,
    		isOpen,
    		dispatch,
    		handleHeaderClick
    	});

    	$$self.$inject_state = $$props => {
    		if ('headerTitle' in $$props) $$invalidate(0, headerTitle = $$props.headerTitle);
    		if ('controls' in $$props) $$invalidate(4, controls = $$props.controls);
    		if ('id' in $$props) $$invalidate(1, id = $$props.id);
    		if ('style' in $$props) $$invalidate(2, style = $$props.style);
    		if ('textToRead' in $$props) $$invalidate(5, textToRead = $$props.textToRead);
    		if ('isOpen' in $$props) $$invalidate(6, isOpen = $$props.isOpen);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		headerTitle,
    		id,
    		style,
    		handleHeaderClick,
    		controls,
    		textToRead,
    		isOpen,
    		click_handler
    	];
    }

    class InaccessibleAccordionButton extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {
    			headerTitle: 0,
    			controls: 4,
    			id: 1,
    			style: 2,
    			textToRead: 5,
    			isOpen: 6
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "InaccessibleAccordionButton",
    			options,
    			id: create_fragment$5.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*headerTitle*/ ctx[0] === undefined && !('headerTitle' in props)) {
    			console.warn("<InaccessibleAccordionButton> was created without expected prop 'headerTitle'");
    		}

    		if (/*controls*/ ctx[4] === undefined && !('controls' in props)) {
    			console.warn("<InaccessibleAccordionButton> was created without expected prop 'controls'");
    		}

    		if (/*id*/ ctx[1] === undefined && !('id' in props)) {
    			console.warn("<InaccessibleAccordionButton> was created without expected prop 'id'");
    		}

    		if (/*style*/ ctx[2] === undefined && !('style' in props)) {
    			console.warn("<InaccessibleAccordionButton> was created without expected prop 'style'");
    		}

    		if (/*textToRead*/ ctx[5] === undefined && !('textToRead' in props)) {
    			console.warn("<InaccessibleAccordionButton> was created without expected prop 'textToRead'");
    		}

    		if (/*isOpen*/ ctx[6] === undefined && !('isOpen' in props)) {
    			console.warn("<InaccessibleAccordionButton> was created without expected prop 'isOpen'");
    		}
    	}

    	get headerTitle() {
    		throw new Error("<InaccessibleAccordionButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set headerTitle(value) {
    		throw new Error("<InaccessibleAccordionButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get controls() {
    		throw new Error("<InaccessibleAccordionButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set controls(value) {
    		throw new Error("<InaccessibleAccordionButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get id() {
    		throw new Error("<InaccessibleAccordionButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<InaccessibleAccordionButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<InaccessibleAccordionButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<InaccessibleAccordionButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get textToRead() {
    		throw new Error("<InaccessibleAccordionButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set textToRead(value) {
    		throw new Error("<InaccessibleAccordionButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isOpen() {
    		throw new Error("<InaccessibleAccordionButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isOpen(value) {
    		throw new Error("<InaccessibleAccordionButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/client/demo/InaccessibleAccordion/InaccessibleAccordionHeader.svelte generated by Svelte v3.48.0 */
    const file$3 = "src/client/demo/InaccessibleAccordion/InaccessibleAccordionHeader.svelte";

    function create_fragment$4(ctx) {
    	let div;
    	let inaccessibleaccordionbutton;
    	let current;

    	inaccessibleaccordionbutton = new InaccessibleAccordionButton({
    			props: {
    				textToRead: /*textToRead*/ ctx[3],
    				headerTitle: /*headerTitle*/ ctx[0],
    				controls: /*controls*/ ctx[1],
    				id: /*id*/ ctx[4],
    				style: /*style*/ ctx[2],
    				isOpen: /*isOpen*/ ctx[5]
    			},
    			$$inline: true
    		});

    	inaccessibleaccordionbutton.$on("updatePanelStates", /*updatePanelStates_handler*/ ctx[7]);

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(inaccessibleaccordionbutton.$$.fragment);
    			attr_dev(div, "class", "accordion-header svelte-1oqddex");
    			attr_dev(div, "style", /*style*/ ctx[2]);
    			add_location(div, file$3, 13, 0, 287);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(inaccessibleaccordionbutton, div, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const inaccessibleaccordionbutton_changes = {};
    			if (dirty & /*textToRead*/ 8) inaccessibleaccordionbutton_changes.textToRead = /*textToRead*/ ctx[3];
    			if (dirty & /*headerTitle*/ 1) inaccessibleaccordionbutton_changes.headerTitle = /*headerTitle*/ ctx[0];
    			if (dirty & /*controls*/ 2) inaccessibleaccordionbutton_changes.controls = /*controls*/ ctx[1];
    			if (dirty & /*id*/ 16) inaccessibleaccordionbutton_changes.id = /*id*/ ctx[4];
    			if (dirty & /*style*/ 4) inaccessibleaccordionbutton_changes.style = /*style*/ ctx[2];
    			if (dirty & /*isOpen*/ 32) inaccessibleaccordionbutton_changes.isOpen = /*isOpen*/ ctx[5];
    			inaccessibleaccordionbutton.$set(inaccessibleaccordionbutton_changes);

    			if (!current || dirty & /*style*/ 4) {
    				attr_dev(div, "style", /*style*/ ctx[2]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(inaccessibleaccordionbutton.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(inaccessibleaccordionbutton.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(inaccessibleaccordionbutton);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('InaccessibleAccordionHeader', slots, []);
    	let { headerLevel = 3 } = $$props;
    	let { headerTitle } = $$props;
    	let { controls = "" } = $$props;
    	let { style } = $$props;
    	let { textToRead } = $$props;
    	let { id } = $$props;
    	let { isOpen } = $$props;

    	const writable_props = [
    		'headerLevel',
    		'headerTitle',
    		'controls',
    		'style',
    		'textToRead',
    		'id',
    		'isOpen'
    	];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<InaccessibleAccordionHeader> was created with unknown prop '${key}'`);
    	});

    	function updatePanelStates_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	$$self.$$set = $$props => {
    		if ('headerLevel' in $$props) $$invalidate(6, headerLevel = $$props.headerLevel);
    		if ('headerTitle' in $$props) $$invalidate(0, headerTitle = $$props.headerTitle);
    		if ('controls' in $$props) $$invalidate(1, controls = $$props.controls);
    		if ('style' in $$props) $$invalidate(2, style = $$props.style);
    		if ('textToRead' in $$props) $$invalidate(3, textToRead = $$props.textToRead);
    		if ('id' in $$props) $$invalidate(4, id = $$props.id);
    		if ('isOpen' in $$props) $$invalidate(5, isOpen = $$props.isOpen);
    	};

    	$$self.$capture_state = () => ({
    		InaccessibleAccordionButton,
    		headerLevel,
    		headerTitle,
    		controls,
    		style,
    		textToRead,
    		id,
    		isOpen
    	});

    	$$self.$inject_state = $$props => {
    		if ('headerLevel' in $$props) $$invalidate(6, headerLevel = $$props.headerLevel);
    		if ('headerTitle' in $$props) $$invalidate(0, headerTitle = $$props.headerTitle);
    		if ('controls' in $$props) $$invalidate(1, controls = $$props.controls);
    		if ('style' in $$props) $$invalidate(2, style = $$props.style);
    		if ('textToRead' in $$props) $$invalidate(3, textToRead = $$props.textToRead);
    		if ('id' in $$props) $$invalidate(4, id = $$props.id);
    		if ('isOpen' in $$props) $$invalidate(5, isOpen = $$props.isOpen);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		headerTitle,
    		controls,
    		style,
    		textToRead,
    		id,
    		isOpen,
    		headerLevel,
    		updatePanelStates_handler
    	];
    }

    class InaccessibleAccordionHeader extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {
    			headerLevel: 6,
    			headerTitle: 0,
    			controls: 1,
    			style: 2,
    			textToRead: 3,
    			id: 4,
    			isOpen: 5
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "InaccessibleAccordionHeader",
    			options,
    			id: create_fragment$4.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*headerTitle*/ ctx[0] === undefined && !('headerTitle' in props)) {
    			console.warn("<InaccessibleAccordionHeader> was created without expected prop 'headerTitle'");
    		}

    		if (/*style*/ ctx[2] === undefined && !('style' in props)) {
    			console.warn("<InaccessibleAccordionHeader> was created without expected prop 'style'");
    		}

    		if (/*textToRead*/ ctx[3] === undefined && !('textToRead' in props)) {
    			console.warn("<InaccessibleAccordionHeader> was created without expected prop 'textToRead'");
    		}

    		if (/*id*/ ctx[4] === undefined && !('id' in props)) {
    			console.warn("<InaccessibleAccordionHeader> was created without expected prop 'id'");
    		}

    		if (/*isOpen*/ ctx[5] === undefined && !('isOpen' in props)) {
    			console.warn("<InaccessibleAccordionHeader> was created without expected prop 'isOpen'");
    		}
    	}

    	get headerLevel() {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set headerLevel(value) {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get headerTitle() {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set headerTitle(value) {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get controls() {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set controls(value) {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get textToRead() {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set textToRead(value) {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get id() {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isOpen() {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isOpen(value) {
    		throw new Error("<InaccessibleAccordionHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/client/demo/InaccessibleAccordion/InaccessibleAccordionItem.svelte generated by Svelte v3.48.0 */
    const file$2 = "src/client/demo/InaccessibleAccordion/InaccessibleAccordionItem.svelte";

    function create_fragment$3(ctx) {
    	let div;
    	let inaccessibleaccordionheader;
    	let t;
    	let inaccessibleaccordionpanel;
    	let div_style_value;
    	let current;

    	inaccessibleaccordionheader = new InaccessibleAccordionHeader({
    			props: {
    				headerTitle: /*options*/ ctx[0].headerTitle,
    				controls: `panel${/*options*/ ctx[0].id}`,
    				id: `button${/*options*/ ctx[0].id}`,
    				textToRead: /*options*/ ctx[0].panelContent,
    				style: /*customStyles*/ ctx[2][0],
    				isOpen: /*isOpen*/ ctx[3],
    				headerLevel: /*headerLevel*/ ctx[1]
    			},
    			$$inline: true
    		});

    	inaccessibleaccordionheader.$on("updatePanelStates", /*updatePanelStates_handler*/ ctx[4]);

    	inaccessibleaccordionpanel = new InaccessibleAccordionPanel({
    			props: {
    				panelContent: /*options*/ ctx[0].panelContent,
    				panelID: `panel${/*options*/ ctx[0].id}`,
    				labeledBy: `button${/*options*/ ctx[0].id}`,
    				style: /*customStyles*/ ctx[2][1],
    				isOpen: /*isOpen*/ ctx[3]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(inaccessibleaccordionheader.$$.fragment);
    			t = space();
    			create_component(inaccessibleaccordionpanel.$$.fragment);
    			attr_dev(div, "class", "accordion-item svelte-ztnmqv");
    			attr_dev(div, "style", div_style_value = /*customStyles*/ ctx[2][2]);
    			add_location(div, file$2, 14, 0, 350);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(inaccessibleaccordionheader, div, null);
    			append_dev(div, t);
    			mount_component(inaccessibleaccordionpanel, div, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const inaccessibleaccordionheader_changes = {};
    			if (dirty & /*options*/ 1) inaccessibleaccordionheader_changes.headerTitle = /*options*/ ctx[0].headerTitle;
    			if (dirty & /*options*/ 1) inaccessibleaccordionheader_changes.controls = `panel${/*options*/ ctx[0].id}`;
    			if (dirty & /*options*/ 1) inaccessibleaccordionheader_changes.id = `button${/*options*/ ctx[0].id}`;
    			if (dirty & /*options*/ 1) inaccessibleaccordionheader_changes.textToRead = /*options*/ ctx[0].panelContent;
    			if (dirty & /*customStyles*/ 4) inaccessibleaccordionheader_changes.style = /*customStyles*/ ctx[2][0];
    			if (dirty & /*isOpen*/ 8) inaccessibleaccordionheader_changes.isOpen = /*isOpen*/ ctx[3];
    			if (dirty & /*headerLevel*/ 2) inaccessibleaccordionheader_changes.headerLevel = /*headerLevel*/ ctx[1];
    			inaccessibleaccordionheader.$set(inaccessibleaccordionheader_changes);
    			const inaccessibleaccordionpanel_changes = {};
    			if (dirty & /*options*/ 1) inaccessibleaccordionpanel_changes.panelContent = /*options*/ ctx[0].panelContent;
    			if (dirty & /*options*/ 1) inaccessibleaccordionpanel_changes.panelID = `panel${/*options*/ ctx[0].id}`;
    			if (dirty & /*options*/ 1) inaccessibleaccordionpanel_changes.labeledBy = `button${/*options*/ ctx[0].id}`;
    			if (dirty & /*customStyles*/ 4) inaccessibleaccordionpanel_changes.style = /*customStyles*/ ctx[2][1];
    			if (dirty & /*isOpen*/ 8) inaccessibleaccordionpanel_changes.isOpen = /*isOpen*/ ctx[3];
    			inaccessibleaccordionpanel.$set(inaccessibleaccordionpanel_changes);

    			if (!current || dirty & /*customStyles*/ 4 && div_style_value !== (div_style_value = /*customStyles*/ ctx[2][2])) {
    				attr_dev(div, "style", div_style_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(inaccessibleaccordionheader.$$.fragment, local);
    			transition_in(inaccessibleaccordionpanel.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(inaccessibleaccordionheader.$$.fragment, local);
    			transition_out(inaccessibleaccordionpanel.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(inaccessibleaccordionheader);
    			destroy_component(inaccessibleaccordionpanel);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let state;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('InaccessibleAccordionItem', slots, []);
    	let { options } = $$props;
    	let { headerLevel = 2 } = $$props;
    	let { customStyles } = $$props;
    	let { isOpen } = $$props;
    	const writable_props = ['options', 'headerLevel', 'customStyles', 'isOpen'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<InaccessibleAccordionItem> was created with unknown prop '${key}'`);
    	});

    	function updatePanelStates_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	$$self.$$set = $$props => {
    		if ('options' in $$props) $$invalidate(0, options = $$props.options);
    		if ('headerLevel' in $$props) $$invalidate(1, headerLevel = $$props.headerLevel);
    		if ('customStyles' in $$props) $$invalidate(2, customStyles = $$props.customStyles);
    		if ('isOpen' in $$props) $$invalidate(3, isOpen = $$props.isOpen);
    	};

    	$$self.$capture_state = () => ({
    		InaccessibleAccordionPanel,
    		InaccessibleAccordionHeader,
    		options,
    		headerLevel,
    		customStyles,
    		isOpen,
    		state
    	});

    	$$self.$inject_state = $$props => {
    		if ('options' in $$props) $$invalidate(0, options = $$props.options);
    		if ('headerLevel' in $$props) $$invalidate(1, headerLevel = $$props.headerLevel);
    		if ('customStyles' in $$props) $$invalidate(2, customStyles = $$props.customStyles);
    		if ('isOpen' in $$props) $$invalidate(3, isOpen = $$props.isOpen);
    		if ('state' in $$props) state = $$props.state;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*isOpen*/ 8) {
    			state = isOpen ? "expanded" : "collapsed";
    		}
    	};

    	return [options, headerLevel, customStyles, isOpen, updatePanelStates_handler];
    }

    class InaccessibleAccordionItem extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {
    			options: 0,
    			headerLevel: 1,
    			customStyles: 2,
    			isOpen: 3
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "InaccessibleAccordionItem",
    			options,
    			id: create_fragment$3.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*options*/ ctx[0] === undefined && !('options' in props)) {
    			console.warn("<InaccessibleAccordionItem> was created without expected prop 'options'");
    		}

    		if (/*customStyles*/ ctx[2] === undefined && !('customStyles' in props)) {
    			console.warn("<InaccessibleAccordionItem> was created without expected prop 'customStyles'");
    		}

    		if (/*isOpen*/ ctx[3] === undefined && !('isOpen' in props)) {
    			console.warn("<InaccessibleAccordionItem> was created without expected prop 'isOpen'");
    		}
    	}

    	get options() {
    		throw new Error("<InaccessibleAccordionItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set options(value) {
    		throw new Error("<InaccessibleAccordionItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get headerLevel() {
    		throw new Error("<InaccessibleAccordionItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set headerLevel(value) {
    		throw new Error("<InaccessibleAccordionItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get customStyles() {
    		throw new Error("<InaccessibleAccordionItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set customStyles(value) {
    		throw new Error("<InaccessibleAccordionItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isOpen() {
    		throw new Error("<InaccessibleAccordionItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isOpen(value) {
    		throw new Error("<InaccessibleAccordionItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/client/demo/InaccessibleAccordion/InaccessibleAccordion.svelte generated by Svelte v3.48.0 */
    const file$1 = "src/client/demo/InaccessibleAccordion/InaccessibleAccordion.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[3] = list[i];
    	child_ctx[5] = i;
    	return child_ctx;
    }

    // (57:2) {#each options.panelInfo as info, i}
    function create_each_block(ctx) {
    	let inaccessibleaccordionitem;
    	let current;

    	inaccessibleaccordionitem = new InaccessibleAccordionItem({
    			props: {
    				options: /*info*/ ctx[3],
    				headerLevel: /*options*/ ctx[0].headerLevel,
    				customStyles: /*options*/ ctx[0].styles,
    				isOpen: /*panelStates*/ ctx[1][/*i*/ ctx[5]]
    			},
    			$$inline: true
    		});

    	inaccessibleaccordionitem.$on("updatePanelStates", /*updatePanelStates*/ ctx[2]);

    	const block = {
    		c: function create() {
    			create_component(inaccessibleaccordionitem.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(inaccessibleaccordionitem, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const inaccessibleaccordionitem_changes = {};
    			if (dirty & /*options*/ 1) inaccessibleaccordionitem_changes.options = /*info*/ ctx[3];
    			if (dirty & /*options*/ 1) inaccessibleaccordionitem_changes.headerLevel = /*options*/ ctx[0].headerLevel;
    			if (dirty & /*options*/ 1) inaccessibleaccordionitem_changes.customStyles = /*options*/ ctx[0].styles;
    			if (dirty & /*panelStates*/ 2) inaccessibleaccordionitem_changes.isOpen = /*panelStates*/ ctx[1][/*i*/ ctx[5]];
    			inaccessibleaccordionitem.$set(inaccessibleaccordionitem_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(inaccessibleaccordionitem.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(inaccessibleaccordionitem.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(inaccessibleaccordionitem, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(57:2) {#each options.panelInfo as info, i}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$2(ctx) {
    	let div;
    	let div_style_value;
    	let current;
    	let each_value = /*options*/ ctx[0].panelInfo;
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div, "class", "accordion-main svelte-1v39kh7");
    			attr_dev(div, "style", div_style_value = /*options*/ ctx[0].styles[3]);
    			add_location(div, file$1, 52, 0, 1539);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*options, panelStates, updatePanelStates*/ 7) {
    				each_value = /*options*/ ctx[0].panelInfo;
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}

    			if (!current || dirty & /*options*/ 1 && div_style_value !== (div_style_value = /*options*/ ctx[0].styles[3])) {
    				attr_dev(div, "style", div_style_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('InaccessibleAccordion', slots, []);

    	let { options = {
    		multiselectable: false,
    		headerLevel: null,
    		styles: ["", ""],
    		panelInfo: []
    	} } = $$props;

    	if (!options.styles) {
    		options.styles = [null, null, null, null];
    	}

    	let panelStates;

    	onMount(() => {
    		//Initially set all panelStates to be false
    		for (let i = 0; i < options.panelInfo.length; i++) {
    			panelStates.push(false);
    		}

    		$$invalidate(1, panelStates);
    	});

    	const updatePanelStates = event => {
    		// Determin index of panel to be expanded
    		const panelIndex = Number(event.detail.target.slice(6)) - 1;

    		// If panel at the index to be changed is already true, set to false (i.e. collapse the panel)
    		if (panelStates[panelIndex] === true) {
    			return $$invalidate(1, panelStates[panelIndex] = false, panelStates);
    		}

    		// If only one panel should be open at a time
    		if (!options.multiselectable) {
    			// Set all panels states to be false except at the panel to be expanded index
    			for (let i = 0; i < options.panelInfo.length; i++) {
    				if (i !== panelIndex) {
    					$$invalidate(1, panelStates[i] = false, panelStates);
    				} else if (i === panelIndex) {
    					$$invalidate(1, panelStates[i] = true, panelStates);
    				}
    			}
    		} else {
    			//Simply set the panel state at the given panel to be ture (i.e. expanded)
    			$$invalidate(1, panelStates[panelIndex] = true, panelStates); // If multiple panels can be open at any given time
    		}
    	};

    	const writable_props = ['options'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<InaccessibleAccordion> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('options' in $$props) $$invalidate(0, options = $$props.options);
    	};

    	$$self.$capture_state = () => ({
    		afterUpdate,
    		beforeUpdate,
    		onMount,
    		InaccessibleAccordionItem,
    		options,
    		panelStates,
    		updatePanelStates
    	});

    	$$self.$inject_state = $$props => {
    		if ('options' in $$props) $$invalidate(0, options = $$props.options);
    		if ('panelStates' in $$props) $$invalidate(1, panelStates = $$props.panelStates);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$invalidate(1, panelStates = []);
    	return [options, panelStates, updatePanelStates];
    }

    class InaccessibleAccordion extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { options: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "InaccessibleAccordion",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get options() {
    		throw new Error("<InaccessibleAccordion>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set options(value) {
    		throw new Error("<InaccessibleAccordion>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/client/demo/MVPDemoPage.svelte generated by Svelte v3.48.0 */
    const file = "src/client/demo/MVPDemoPage.svelte";

    // (78:2) {:else}
    function create_else_block(ctx) {
    	let inaccessibleaccordion;
    	let current;

    	inaccessibleaccordion = new InaccessibleAccordion({
    			props: { options: /*options*/ ctx[1] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(inaccessibleaccordion.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(inaccessibleaccordion, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(inaccessibleaccordion.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(inaccessibleaccordion.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(inaccessibleaccordion, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(78:2) {:else}",
    		ctx
    	});

    	return block;
    }

    // (76:2) {#if accessiblilty === 'accessible'}
    function create_if_block(ctx) {
    	let accordion;
    	let current;

    	accordion = new Accordion({
    			props: { options: /*options*/ ctx[1] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(accordion.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(accordion, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(accordion.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(accordion.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(accordion, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(76:2) {#if accessiblilty === 'accessible'}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let article;
    	let h1;
    	let t1;
    	let current_block_type_index;
    	let if_block;
    	let t2;
    	let br;
    	let t3;
    	let button;
    	let current;
    	const if_block_creators = [create_if_block, create_else_block];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*accessiblilty*/ ctx[0] === 'accessible') return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	const button_spread_levels = [/*btnProps*/ ctx[2]];
    	let button_props = {};

    	for (let i = 0; i < button_spread_levels.length; i += 1) {
    		button_props = assign(button_props, button_spread_levels[i]);
    	}

    	button = new Button({ props: button_props, $$inline: true });

    	const block = {
    		c: function create() {
    			article = element("article");
    			h1 = element("h1");
    			h1.textContent = "How to Renew Your Passport";
    			t1 = space();
    			if_block.c();
    			t2 = space();
    			br = element("br");
    			t3 = space();
    			create_component(button.$$.fragment);
    			attr_dev(h1, "class", "svelte-14p7hmy");
    			add_location(h1, file, 74, 2, 2490);
    			attr_dev(br, "class", "svelte-14p7hmy");
    			add_location(br, file, 80, 2, 2653);
    			attr_dev(article, "class", "svelte-14p7hmy");
    			add_location(article, file, 73, 0, 2478);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, article, anchor);
    			append_dev(article, h1);
    			append_dev(article, t1);
    			if_blocks[current_block_type_index].m(article, null);
    			append_dev(article, t2);
    			append_dev(article, br);
    			append_dev(article, t3);
    			mount_component(button, article, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				} else {
    					if_block.p(ctx, dirty);
    				}

    				transition_in(if_block, 1);
    				if_block.m(article, t2);
    			}

    			const button_changes = (dirty & /*btnProps*/ 4)
    			? get_spread_update(button_spread_levels, [get_spread_object(/*btnProps*/ ctx[2])])
    			: {};

    			button.$set(button_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			transition_in(button.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			transition_out(button.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(article);
    			if_blocks[current_block_type_index].d();
    			destroy_component(button);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('MVPDemoPage', slots, []);

    	const options = {
    		multiselectable: false,
    		headerLevel: 4,
    		//layout of styles array [headerStyle, panelStyles, ]
    		styles: [
    			'height: 50px; width: 100%; background-color: lightblue; border: 1px solid #eee',
    			'background-color: #eee'
    		],
    		panelInfo: [
    			{
    				id: 1,
    				panelContent: 'Go to the passport store',
    				headerTitle: 'Step 1'
    			},
    			{
    				id: 2,
    				panelContent: 'Bribe the person working to expedite your passport',
    				headerTitle: 'Step 2'
    			},
    			{
    				id: 3,
    				panelContent: 'Get your passport',
    				headerTitle: 'Step 3'
    			}
    		]
    	};

    	let accessiblilty = 'inaccessible';

    	const btnProps = {
    		id: 'DemoButton',
    		label: 'Accessible button',
    		content: 'Toggle accordion accessibility',
    		handleClick: () => $$invalidate(0, accessiblilty = accessiblilty === 'accessible'
    		? 'inaccessible'
    		: 'accessible')
    	};

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<MVPDemoPage> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Accordion,
    		Button,
    		InaccessibleAccordion,
    		options,
    		accessiblilty,
    		btnProps
    	});

    	$$self.$inject_state = $$props => {
    		if ('accessiblilty' in $$props) $$invalidate(0, accessiblilty = $$props.accessiblilty);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [accessiblilty, options, btnProps];
    }

    class MVPDemoPage extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "MVPDemoPage",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src/App.svelte generated by Svelte v3.48.0 */

    function create_fragment(ctx) {
    	let mvpdemopage;
    	let current;
    	mvpdemopage = new MVPDemoPage({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(mvpdemopage.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(mvpdemopage, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(mvpdemopage.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(mvpdemopage.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(mvpdemopage, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ AccordionPage, Home, MvpDemoPage: MVPDemoPage });
    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
        target: document.body,
        props: {
            name: 'world'
        }
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map

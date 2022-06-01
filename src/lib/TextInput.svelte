<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">

  type TextInputOptionTypes = {
    label: string | null;
    placeholder: string | null;
    id: string | null;
    type: InputTypes | null;

    max?: string | null;
    min?: string | null;
    maxlength?: string | null;
    size?: string | null;
    step?: string | null;
    inputStyle?: string | null;
    labelStyle?: string | null;

    autocomplete?: boolean;
    disabled?: boolean;
    multiple?: boolean;
    readonly?: boolean;
    required?: boolean;
  }
  
  type InputTypes = 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'tel' | 'text'| 'time' | 'url' | 'week' | ''
  
  export let options: TextInputOptionTypes = {
    label: null,
    placeholder: null,
    id: null,
    type: null,

    min: null,
    max: null,
    maxlength: null,
    size: null,
    step: null,
    inputStyle: null,
    labelStyle: null,

    autocomplete: false,
    disabled: false,
    multiple: false,
    readonly: false,
    required: false
  };

  let { label, 
        placeholder, 
        id, 
        type, 
        min, 
        max, 
        maxlength, 
        size, 
        step,
        inputStyle,
        labelStyle,
        autocomplete,
        disabled,
        multiple,
        readonly,
        required
        } = options;

  // //required attributes
	// export let label: string = '';
	// export let placeholder: string = '';
	// export let id: string = '';
	// export let type: string = '';

  // //optional attributes
  // export let max: string = '';
  // export let min: string = '';
  // export let maxlength: string = '';
  // export let size: string = '';
  // export let step: string = '';
  // export let inputStyle: string = '';
  // export let labelStyle: string = '';

  // export let autocomplete: boolean = false; 
  // export let disabled: boolean = false;
  // export let multiple: boolean = false;
  // export let readonly: boolean = false;
  // export let required: boolean = false;
</script>


<!-- ************************* HTML ************************* -->
<label 
  for={id}
  style={labelStyle}
  class='sv-textinput-label'>
  {label}
</label>
<input 
  {id} 
  {type} 
  {placeholder}
  {min}
  {max} 
  {maxlength} 
  {size}
  {step}
  {disabled}
  {autocomplete}
  {multiple}
  {readonly}
  {required}
  style={inputStyle}/>


<!-- ************************* STYLES ************************* -->  
<style>
	/*
    Style these however we'd like later
  */
</style>

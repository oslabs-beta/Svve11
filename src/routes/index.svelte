<script>

    import Navbar from './components/Navbar.svelte';
    import AccordionPage from './pages/AccordionPage.svelte'

</script>


<section id="main-container">


  <section id="nav-container">
    <Navbar />
  </section>

  <section id="content-container">
    <AccordionPage/>
  </section>

</section>


<style>

/******* ID Styles for index page ********/

  #main-container {
    width: 100%;
    margin: 0;
    display: grid;
    grid-template-columns: 15% 85%;
    overflow: auto;
  }

  #nav-container {
    grid-column: 0 1;
    grid-row: auto;
    height: 100%;
    overflow: auto;
  }


  /************ GLOBAL STYLES ************/

  /********* Cell Phone Style **********/
  @media screen and (max-width: 667px) {
    :global(p) {
      font-size: 8px;
    }

    :global(h1) {
      font-size: 20px;
    }

    :global(h2) {
      font-size: 14px;
      margin: 0 0 10px 0;
    }

    :global(h3) {
      font-size: 10px;
    }
    
    :global(h4) {
      font-size: 8px;
    }
    
    :global(ul) {
      font-size: 8px;
    }

    :global(.code-block) {
      font-size: 8px;
    }

    :global(.curly-symbol) {
      font-size: 8px;
    }

    :global(.header-button) {
    font-size: 8px;
    }

    #content-container {
      font-size: 8px;
    }
  }

  /************* Tablet and Computer Styles **********/
  @media screen and (min-width: 668px) {
    :global(p) {
      font-size: 16px;
    }

    :global(h1) {
      font-size: 42px;
    }

    :global(h2) {
      font-size: 36px;
      margin: 0 0 10px 10px;
    }

    :glboal(h3) {
      font-size: 28px;
    }
    
    :global(h4) {
      font-size: 18px;
    }
    
    :global(.code-block) {
      font-size: 20px;
    }

    :global(.curly-symbol) {
      font-size: 24px;
    }

    :global(.example-accordion) {
      font-size: 16px;
    }
  }

  /************ Non-responsive Styles **********/
  /**** Tag Styles *****/
  
  :global(*) {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
  }

  :global(a) {
    font-weight: 500;
    color: #2744e0;
  }

  :global(article) {
    width: auto;
  }

  :global(code) {
    font-family: -apple-system, BlinkMacSystemFont, monospace;
  }

  :global(fieldset) {
    border: none;
    margin: 0;
    padding-left: 0;
  }

  :global(h1) {
    margin-bottom: 0;
  }

  :global(h2) {
    border-bottom: 1px solid;
    margin: 0 0 10px 0;
  }

  :global(h3) {
    margin: 0;
  }

  :global(h4) {
    margin: 10px 0;
  }

  :global(html, body) {
    margin: 0;
    padding: 0;
  }

  :global(legend) {
    display: none;
  }

  :global(p) {
    margin: 10px 0;
  }

  :global(pre) {
    margin: 0;
  }

  :global(pre code) {
    display: block;
    background-color: #eee;
    border-radius: 0.5em;
  }

  /**** Class Styles *****/
  :global(.bold-word) {
    font-weight: 600;
  }

  :global(.code-block) {
    font-weight: 600;
  }

  :global(.content-section) {
    margin-left: 10px;
  }

  :globla(.curly-symbol) {
    font-family: -apple-system, BlinkMacSystemFont, monospace;
    font-weight: 50;
  }
  
  :global(.example-code) {
    margin-bottom: 20px;
  }
  
  :global(.header-paragraph) {
    margin-left: 10px;
  }

  :global(.page-component) {
    margin: 0;
    padding: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin: 0 15px;
  }

  :global(.resource-links-list) {
    padding-left: 20px;
  }
  
</style>

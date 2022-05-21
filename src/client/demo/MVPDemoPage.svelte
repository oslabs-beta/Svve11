<script>
  import Accordion from '../../lib/components/Accordion/Accordion.svelte';
  import Button from '../../lib/components/Button.svelte';
  import InaccessibleAccordion from './InaccessibleAccordion/InaccessibleAccordion.svelte';
  const options = {
    multiselectable: false,
    headerLevel: 4,
    //layout of styles array [headerStyle, panelStyles, ]
    styles: [
      'height: 50px; width: 100%; background-color: lightblue; border: 1px solid #eee',
      'background-color: #eee',
    ],
    panelInfo: [
      {
        id: 1,
        panelContent: 'Go to the passport store',
        headerTitle: 'Step 1',
      },
      {
        id: 2,
        panelContent: 'Bribe the person working to expedite your passport',
        headerTitle: 'Step 2',
      },
      {
        id: 3,
        panelContent: 'Get your passport',
        headerTitle: 'Step 3',
      },
    ],
  };

  let accessiblilty = 'inaccessible';

  const btnProps = {
    id: 'DemoButton',
    label: 'Accessible button',
    content: 'Toggle accordion accessibility',
    handleClick: () =>
      (accessiblilty =
        accessiblilty === 'accessible' ? 'inaccessible' : 'accessible'),
  };
</script>

<!-- <article>
  <section aria-label="codesmith general information">
    <h1>Full-time Software Engineering Immersive</h1>
    <h2>
      Codesmith’s 12-week coding bootcamp, focused on building engineers, not
      technicians.
    </h2>
    <p>
      The Full-time Software Engineering Immersive Program teaches full stack
      JavaScript and computer science to prepare you for mid and senior level
      software engineering roles. The expertly designed curriculum and
      supportive community immerses you in modern web technologies, such as
      React and Node.js, and encourages you to tackle unique and unfamiliar
      problems to prepare you for the ever-changing tech landscape. Codesmith
      offers an extensive hiring support program that guides students through
      the hiring process, including interview strategies, portfolio development,
      and post-graduation check-ins. By the end of the 12 weeks, you will be an
      autonomous engineer, ready to make an impact at innovative tech companies
      worldwide.
    </p>
  </section>
  <section aria-label="codesmith application information">
    <h2>Application Information:</h2>
    <div id="demo">
      <InaccessibleAccordion {options} />
      <Accordion {options} />
    </div>
  </section>
</article> -->

<article>
  <h1>How to Renew Your Passport</h1>
  {#if accessiblilty === 'accessible'}
    <Accordion {options} />
  {:else}
    <InaccessibleAccordion {options} />
  {/if}
  <br />
  <Button {...btnProps} />
</article>

<!-- <Accordion /> -->
<style>
  article {
    padding: 1rem 5rem;
  }
  #demo {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  * {
    font-size: 16px;
    font-weight: 100;
  }
  h1 {
    font-size: 42px;
    font-weight: 400;
  }
  h2 {
    font-size: 32px;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
</style>

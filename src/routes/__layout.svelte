<script lang='ts'>
    import '../app.css'
    import Navbar from './components/Navbar.svelte'
</script>

<section class='main-container'>
    <section id="nav-container">
        <Navbar />
      </section>

      <slot></slot>
</section>

<style>

</style>
<script>
    import '../app.css'
    import Footer from '../components/shared/footer.svelte';
    import Header from '../components/shared/header.svelte';
</script>

<div>
    <Header/>
    <slot/>
    <Footer/>
</div>


<script>
    import Svg from "./../components/commons/Svg.svelte";
    import PopupSearch from "./../components/commons/PopupSearch.svelte";
    import Header from "./../components/commons/Header.svelte";
    import Footer from "./../components/commons/Footer.svelte";
    import FooterBottom from "./../components/commons/FooterBottom.svelte";
</script>

<Svg />
<PopupSearch />
<Header />
<slot />
<Footer />
<FooterBottom />
import { useRouter } from "next/router";


const CoffeeShop = () => {
    const router = useRouter();
    const shopId = router.query.id;
    console.log('selected id: ', shopId);

    return (
        <div>CoffeeShop</div>
    );
}

export default CoffeeShop;
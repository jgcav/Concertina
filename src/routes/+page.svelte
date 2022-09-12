<script>

import GridList from "../components/GridList.svelte";
import GridItem from "../components/GridItem.svelte";

const concerts = [
  {
    id: 1,
    name: "Children of Zeus",
    imgurl: "https://dice-media.imgix.net/attachments/2021-03-03/a401d8d9-acc4-41f2-870f-43c970a7763b.jpg?rect=0%2C0%2C1571%2C1571",
  },
  {
    id: 2,
    name: "Bombay Bicyle Club",
    imgurl: "https://diy-magazine.s3.amazonaws.com/d/diy/Artists/B/Bombay-Bicycle-Club/DIY-93/8W0A7792.jpg",
  },
  {
    id: 3,
    name: "Kendrick Lamar",
    imgurl: "https://thethinair.net/wp-content/uploads/2022/05/kendrick-lamar-1502874912.09.2560x1440.jpeg",
  },
  {
    id: 4,
    name: "Parcels",
    imgurl: "https://www.nme.com/wp-content/uploads/2021/10/nme-au-cover-2021-parcels-hero@2560x1650.jpg",
  },
  {
    id: 5,
    name: "Maggie Rogers",
    imgurl: "https://i.guim.co.uk/img/media/1634d345affe8aac6a7a1cd00534c9a143b2b928/326_591_5979_3588/master/5979.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=68129057568ef09cc056ef941ea11f9c",
  },
  {
    id: 6,
    name: "Talib Kweli",
    imgurl: "https://miro.medium.com/max/1400/1*lJw1oKpbYOGXCtG5qGmrFA.jpeg",
  },
  {
    id: 7,
    name: "Leon Bridges",
    imgurl: "https://i.guim.co.uk/img/media/c949f922687de7361eb010fc53902265994a9b8a/0_0_3635_3217/master/3635.jpg?width=1020&quality=85&fit=max&s=edeb6fdfd4a7b13595775ce85a2bb6eb",
  },
  {
    id: 8,
    name: "Khruangbin",
    imgurl: "https://video-images.vice.com/test-uploads/articles/5ef21897179bf0009d35800d/lede/1592932612032-KHRUANGBIN.jpeg?crop=1xw:1xh;center,center",
  },
  {
    id: 9,
    name: "The 1975",
    imgurl: "https://readdork.com/wp-content/uploads/2020/11/The1975__SELECTS_ItsNotLiving_0006_JH-12.jpg",
  },
  
];

</script>

<main>

    <div class="flex flex-col px-8 mx-auto rounded-lg w-5/6 justify-center items-center text-center">
        <p class="font-base w-2/3 mb-10">concertina is a place where you can find out my thoughts about the concerts i've been to, watch videos i've recorded and learn more about the artists...</p>
    </div>

    <GridList concerts="{concerts}">
        {#each concerts as concert}
            <GridItem data={concert}/>
        {/each}
    </GridList>
    
</main>
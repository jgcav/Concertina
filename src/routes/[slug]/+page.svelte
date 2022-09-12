<script>
    import { InformationCircle, Video, Rating } from "flowbite-svelte";
    import { page } from '$app/stores';
import GridItem from "../../components/GridItem.svelte";

    const concertInfo = [
  {
    id: 1,
    name: "Children of Zeus",
    imgurl: "https://dice-media.imgix.net/attachments/2021-03-03/a401d8d9-acc4-41f2-870f-43c970a7763b.jpg?rect=0%2C0%2C1571%2C1571",
    date: "11/2/20",
    vidurl: "/zeus.mov",
    songurl: "https://embed.music.apple.com/gb/album/the-most-humblest-of-all-time-ever/1562313010?i=1562313021",
    youtube: "https://www.youtube.com/user/KONNYKON1",
    rating: 5,
    venue: "Belgrave, Leeds"
  },
  {
    id: 2,
    name: "Bombay Bicyle Club",
    imgurl: "https://diy-magazine.s3.amazonaws.com/d/diy/Artists/B/Bombay-Bicycle-Club/DIY-93/8W0A7792.jpg",
    date: "11/2/20",
    vidurl: "/bombay.mov",
    songurl: "https://embed.music.apple.com/gb/album/luna/1443148744?i=768075574",
    youtube: "https://www.youtube.com/channel/UCTmVnjXgqOwBYPXMXUrMj6Q",
    rating: 5,
    venue: "O2 Academy, Leeds"
  },
  {
    id: 3,
    name: "Kendrick Lamar",
    imgurl: "https://thethinair.net/wp-content/uploads/2022/05/kendrick-lamar-1502874912.09.2560x1440.jpeg",
    date: "10/2/18",
    vidurl: "",
    songurl: "https://embed.music.apple.com/gb/album/money-trees-feat-jay-rock/1440873524?i=659219043",
    youtube: "https://www.youtube.com/channel/UC3lBXcrKFnFAFkfVk5WuKcQ",
    rating: 5,
    venue: "MEN Arena, Manchester"
  },
  {
    id: 4,
    name: "Parcels",
    imgurl: "https://www.nme.com/wp-content/uploads/2021/10/nme-au-cover-2021-parcels-hero@2560x1650.jpg",
    date: "20/4/19",
    vidurl: "/parcels.mov",
    songurl: "https://embed.music.apple.com/gb/album/tieduprightnow/1420157166?i=1420158345",
    youtube: "https://www.youtube.com/channel/UC2as7PrmUgmdZAkMIWNY6EQ",
    rating: 4,
    venue: "Coachella, California"
  },
  {
    id: 5,
    name: "Maggie Rogers",
    imgurl: "https://i.guim.co.uk/img/media/1634d345affe8aac6a7a1cd00534c9a143b2b928/326_591_5979_3588/master/5979.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=68129057568ef09cc056ef941ea11f9c",
    date: "20/4/19",
    vidurl: "/maggie.mov",
    songurl: "https://embed.music.apple.com/gb/album/light-on/1437448293?i=1437448494",
    youtube: "https://www.youtube.com/channel/UCteFOtSvvbnceka5zKsHBYw",
    rating: 4,
    venue: "Coachella, California"
  },
  {
    id: 6,
    name: "Talib Kweli",
    imgurl: "https://miro.medium.com/max/1400/1*lJw1oKpbYOGXCtG5qGmrFA.jpeg",
    date: "6/11/18",
    vidurl: "/talib.mov",
    songurl: "https://embed.music.apple.com/gb/album/never-been-in-love/1444222638?i=1444223455",
    youtube: "https://www.youtube.com/channel/UCF4EQffE1WIaWfAyOnlXngw",
    rating: 4,
    venue: "The Wardrobe, Leeds"
  },
  {
    id: 7,
    name: "Leon Bridges",
    imgurl: "https://i.guim.co.uk/img/media/c949f922687de7361eb010fc53902265994a9b8a/0_0_3635_3217/master/3635.jpg?width=1020&quality=85&fit=max&s=edeb6fdfd4a7b13595775ce85a2bb6eb",
    date: "15/11/18",
    vidurl: "/leon.mov",
    songurl: "https://embed.music.apple.com/gb/album/shy/1356338660?i=1356339060",
    youtube: "https://www.youtube.com/channel/UCQr1Q3uFt1K7KhMkDxa9q2w",
    rating: 4,
    venue: "O2 Academy, Leeds"
  },
  {
    id: 8,
    name: "Khruangbin",
    imgurl: "https://video-images.vice.com/test-uploads/articles/5ef21897179bf0009d35800d/lede/1592932612032-KHRUANGBIN.jpeg?crop=1xw:1xh;center,center",
    date: "16/4/22",
    vidurl: "",
    songurl: "https://embed.music.apple.com/gb/album/evan-finds-the-third-room/1299272305?i=1299273063",
    youtube: "https://www.youtube.com/channel/UCZGBua-dvwfSdcF9AskDIgw",
    rating: 4,
    venue: "O2 Apollo, Manchester",
  },
  {
    id: 9,
    name: "The 1975",
    imgurl: "https://readdork.com/wp-content/uploads/2020/11/The1975__SELECTS_ItsNotLiving_0006_JH-12.jpg",
    date: "19/4/19",
    vidurl: "/1975.mov",
    songurl: "https://embed.music.apple.com/gb/album/shes-american/1440840422?i=1062702196",
    youtube: "https://www.youtube.com/channel/UC_LfW1R3B0of9qOw1uI-QNQ",
    rating: 5,
    venue: "Coachella, California",
  },
  
];

</script>


{#each concertInfo as info}
    {#if $page.params.slug == info.id}
    <img src={info.imgurl} alt="artistphoto" class="w-full mb-6">
    <div class="flex flex-col items-center">
        <h1 class="font-serif text-4xl font-normal w-auto text-slate-900 mb-5">{info.name}</h1>
        <a href={info.youtube}>
        <img src="/youtube_social_icon_red.png" alt="youtube-icon" class="mb-5">
    </a>
        <p class="font-base w-auto mb-5"> <Rating total={5} rating={info.rating} /></p>
        <p class="font-base w-auto mb-5">Date: {info.date}</p>
        <p class="font-base w-auto mb-5">Venue: {info.venue}</p>
        <p></p>
        <Video src ={info.vidurl} controls class="w-96 mb-5"/>
        <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={info.songurl} class="mb-10" title="snippet"></iframe>
</div>
    {/if}
{/each}
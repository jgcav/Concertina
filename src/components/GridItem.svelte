<script>
    export let data
</script>

<div class="group relative container mb-60 w-full md:w-1/3 h-96 md:h-64 xl:h-96 p-3 shrink-0 snap-center">
    <img class="h-full w-full object-cover rounded-md" src="{data.imgurl}" alt="{data.name.split('-').join(' ')}"/>
    <div class="absolute top-0 left-0 px-6 py-4">
        <a href="/{data.id}" class="leading-normal hidden group-hover:block bg-transparent hover:bg-slate-700 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-700 hover:border-transparent rounded">{data.name}</a>
      </div>
</div>
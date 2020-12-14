<script lang="ts">
  import BadgeCheckIcon from '../BadgeCheckIcon';
  import CurrencyDollarIcon from '../CurrencyDollarIcon';

  export let url = '';
  export let ageGroupCode = '';
  export let name = '';
</script>

<a class="xl:w-1/3 md:w-1/2 p-4" href={url}>
  <div class="border border-gray-300 p-6 rounded-lg">
    <div class="flex justify-between items-center mb-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500">{ageGroupCode}</div>
      <h2 class="text-lg font-medium title-font">{name}</h2>
    </div>

    <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>

    <div class="text-center mt-2 leading-none flex justify-between w-full">
      <span class="mr-3 inline-flex items-center leading-none text-sm py-1">
        <BadgeCheckIcon class="w-5 h-5 mr-1 text-green-500" />
        10 (Reg'd)
      </span>
      <span class=" inline-flex items-center leading-none text-sm">
        <CurrencyDollarIcon class="w-5 h-5 mr-1 text-green-500" />
        10 (Reg'd & Paid)
      </span>
    </div>
  </div>
</a>

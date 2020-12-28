<script lang="ts">
  import format from 'date-fns/format';
  import { getUrlBirthdayMonth } from '@this/scripts/utility/getUrl';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import logoUrl from './logo.png';
  export const state = null;

  const currentMonth = new Date().getMonth() + 1;
  const months = [];
  for (let i = 0; i < 12; i++) {
    months.push((i + currentMonth) % 12);
  }

  const getMonthName = (month: number) => format(new Date(1900, month - 1, 1), 'MMMM');

  pageTitle.set('Birthdays');
</script>

<div class="container mx-auto xl:py-10" style="--background-url:url({logoUrl})">
  {#each months as month}
    <a class="block items-center border border-gray-300 px-6 py-3 mt-2" href={getUrlBirthdayMonth(month.toString())}>{getMonthName(month)}</a>
  {/each}
</div>

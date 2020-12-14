<script lang="ts">
  import { background } from '@this/constants/theme';
  import BadgeCheckIcon from '@this/icons/BadgeCheckIcon';
  import CurrencyDollarIcon from '@this/icons/CurrencyDollarIcon';
  import CardOfficial from '../CardOfficial';

  export let url = '';
  export let initials = null;
  export let familyName = null;
  export let firstName = '';
  export let dateOfBirth = '';
  export let gender = null;

  console.log(dateOfBirth);
  const colour = background[gender] ?? 'gray';
</script>

<a class="xl:w-1/3 md:w-1/2 w-full p-2 sm:p-4" href={url}>
  <div class="border border-gray-300 p-6 rounded-lg">
    <div class="flex justify-between items-center mb-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
      <h2 class="text-lg font-medium title-font">{familyName}, {firstName}</h2>
    </div>
    <!-- <CardOfficial role="Coach" official={headCoach} />
    <CardOfficial role="Assistant" official={assistantCoach} />
    <CardOfficial role="Manager" official={teamManager} />
    <CardOfficial role="Trainer" official={trainer} /> -->
    <!-- <div class="text-center mt-4 leading-none flex justify-between w-full">
      <span class="mr-3 inline-flex items-center leading-none text-sm py-1">
        <BadgeCheckIcon class="w-5 h-5 mr-1 text-{colour}-500" />
        {registeredCount}
        Registered
      </span>
      <span class=" inline-flex items-center leading-none text-sm">
        <CurrencyDollarIcon class="w-5 h-5 mr-1 text-{colour}-500" />
        {paidCount}
        Paid
      </span>
    </div> -->
  </div>
</a>

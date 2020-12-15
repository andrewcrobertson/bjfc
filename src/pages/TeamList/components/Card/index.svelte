<script lang="ts">
  import * as teamGenderEnum from '@this/constants/teamGenderEnum';
  import { background } from '@this/constants/theme';
  import BadgeCheckIcon from '@this/icons/BadgeCheckIcon';
  import CurrencyDollarIcon from '@this/icons/CurrencyDollarIcon';
  import CardOfficial from '../CardOfficial';

  export let code = '';
  export let teamGender = teamGenderEnum.mixed as string;
  export let ageGroupCode = '';
  export let name = '';
  export let headCoach = null;
  export let assistantCoach = null;
  export let teamManager = null;
  export let trainer = null;
  export let registeredCount = 0;
  export let paidCount = 0;

  const colour = background[teamGender];
</script>

<div class="xl:w-1/3 md:w-1/2 w-full p-2 sm:p-4">
  <div class="border border-gray-300 p-6">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{ageGroupCode}</div>
      <h2 class="text-lg font-medium title-font ml-2">{name}</h2>
    </div>
    <CardOfficial role="Coach" official={headCoach} />
    <CardOfficial role="Assistant" official={assistantCoach} />
    <CardOfficial role="Manager" official={teamManager} />
    <CardOfficial role="Trainer" official={trainer} />
    <div class="text-center mt-4 leading-none flex justify-between w-full">
      <span class="mr-3 inline-flex items-center leading-none text-sm py-1">
        <BadgeCheckIcon class="w-5 h-5 mr-1 text-{colour}-500" />
        {registeredCount}
        Registered
      </span>
      <span class="inline-flex items-center leading-none text-sm">
        <CurrencyDollarIcon class="w-5 h-5 mr-1 text-{colour}-500" />
        {paidCount}
        Paid
      </span>
    </div>
    <div class="text-center mt-4 leading-none flex justify-between w-full">
      <a class="text-sm border border-gray-300 px-6 py-3" href="/teams/{code}/officials/"> Officials </a>
      <a class="text-sm border border-gray-300 px-6 py-3" href="/teams/{code}/members/"> Players </a>
    </div>
  </div>
</div>

<script lang="ts">
  import BadgeCheckIcon from '../BadgeCheckIcon';
  import CurrencyDollarIcon from '../CurrencyDollarIcon';
  import CardOfficial from '../CardOfficial';
  import { background } from '@this/constants/theme';
  import * as teamGenderEnum from '@this/constants/teamGenderEnum';

  export let url = '';
  export let teamGender = teamGenderEnum.mixed as string;
  export let ageGroupCode = '';
  export let name = '';
  export let headCoach = null;
  export let assistantCoach = null;
  export let teamManager = null;
  export let trainer = null;

  const colour = background[teamGender];
</script>

<a class="xl:w-1/3 md:w-1/2 p-4" href={url}>
  <div class="border border-gray-300 p-6 rounded-lg">
    <div class="flex justify-between items-center mb-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{ageGroupCode}</div>
      <h2 class="text-lg font-medium title-font">{name}</h2>
    </div>

    <CardOfficial role="Coach" official={headCoach} />
    <CardOfficial role="Assistant Coach" official={assistantCoach} />
    <CardOfficial role="Team Manager" official={teamManager} />
    <CardOfficial role="Trainer" official={trainer} />

    <div class="text-center mt-4 leading-none flex justify-between w-full">
      <span class="mr-3 inline-flex items-center leading-none text-sm py-1">
        <BadgeCheckIcon class="w-5 h-5 mr-1 text-{colour}-500" />
        10 (Reg'd)
      </span>
      <span class=" inline-flex items-center leading-none text-sm">
        <CurrencyDollarIcon class="w-5 h-5 mr-1 text-{colour}-500" />
        10 (Reg'd & Paid)
      </span>
    </div>
  </div>
</a>

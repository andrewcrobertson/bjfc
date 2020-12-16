<script lang="ts">
  import * as teamGenderEnum from '@this/constants/teamGenderEnum';
  import { background } from '@this/constants/theme';
  import ClipboardListIcon from '@this/icons/ClipboardListIcon';
  import ShieldCheckIcon from '@this/icons/ShieldCheckIcon';
  import CardOfficial from '../CardOfficial';

  export let code = '';
  export let teamGender = teamGenderEnum.mixed as string;
  export let ageGroupCode = '';
  export let name = '';
  export let headCoach = false;
  export let assistantCoach = false;
  export let teamManager = false;
  export let trainer = false;
  export let registeredCount = 0;
  export let insuredCount = 0;

  const colour = background[teamGender];
</script>

<div class="xl:w-1/3 md:w-1/2 w-full p-2 sm:p-4">
  <div class="border border-gray-300 p-4 lg:p-6">
    <div class="flex items-center mb-2">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{ageGroupCode}</div>
      <h2 class="text-lg font-medium title-font ml-2">{name}</h2>
    </div>
    <div class="mt-4 flex justify-between w-full">
      <div class="flex flex-col">
        <span class="inline-flex items-center text-sm">
          <ClipboardListIcon class="w-5 h-5 mr-1 text-{colour}-500" />
          {registeredCount}
          Registered
        </span>
        <span class="inline-flex items-center text-sm">
          <ShieldCheckIcon class="w-5 h-5 mr-1 text-{colour}-500" />
          {insuredCount}
          Insured
        </span>
      </div>
      <div class="flex flex-col">
        <CardOfficial role="Head Coach" filled={headCoach} {colour} />
        <CardOfficial role="Assistant Coach" filled={assistantCoach} {colour} />
        <CardOfficial role="Team Manager" filled={teamManager} {colour} />
        <CardOfficial role="Trainer" filled={trainer} {colour} />
      </div>
    </div>
    <div class="mt-4 flex justify-between w-full">
      <a class="text-sm border border-gray-300 px-6 py-3" href="/teams/{code}/members/">Players</a>
      <a class="text-sm border border-gray-300 px-6 py-3" href="/teams/{code}/officials/">Officials</a>
    </div>
  </div>
</div>

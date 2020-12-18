<script lang="ts">
  import * as teamGenderEnum from '@this/constants/teamGenderEnum';
  import { background } from '@this/constants/theme';
  import OfficialStatus from '../OfficialStatus';
  import PlayerInsuredCount from '../PlayerInsuredCount';
  import PlayerRegisteredCount from '../PlayerRegisteredCount';
  import PlayerTotalCount from '../PlayerTotalCount';

  let rootClass = '';
  export { rootClass as class };
  export let team: any = {};

  const code = team.code;
  const teamGender = team.teamGender;
  const ageGroupCode = team.ageGroupCode;
  const name = team.name;
  const roles = team.roles;
  const totalCount = team.totalCount;
  const registeredCount = team.registeredCount;
  const insuredCount = team.insuredCount;
  const colour = background[teamGender ?? teamGenderEnum.mixed];
</script>

<div class="{rootClass} p-2 sm:p-4">
  <div class="border border-gray-300 p-4 lg:p-6">
    <div class="flex items-center mb-2">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{ageGroupCode}</div>
      <h2 class="text-lg font-medium title-font ml-2">{name}</h2>
    </div>
    <div class="flex justify-between w-full mt-4">
      <div class="flex flex-col">
        <PlayerTotalCount {totalCount} {colour} />
        <hr class="mt-1 mb-1 border border-gray-300 border-t-0" />
        <PlayerInsuredCount {insuredCount} {colour} />
        <PlayerRegisteredCount {registeredCount} {colour} />
      </div>
      <div class="flex flex-col">
        {#each roles as { name, filled }}
          <OfficialStatus role={name} {filled} {colour} />
        {/each}
      </div>
    </div>
    <div class="mt-4 flex justify-between w-full">
      <a class="text-sm border border-gray-300 px-3 py-1" href="/teams/{code}/players/">Players</a>
      <a class="text-sm border border-gray-300 px-3 py-1" href="/teams/{code}/officials/">Officials</a>
    </div>
  </div>
</div>

<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import InsuredLabelledIcon from '@this/components/labelledIcon/InsuredLabelledIcon';
  import RegisteredLabelledIcon from '@this/components/labelledIcon/RegisteredLabelledIcon';
  import PersonLabelledIcon from '@this/components/labelledIcon/PersonLabelledIcon';
  import * as teamGenderEnum from '@this/scripts/constants/teamGenderEnum';
  import { getUrlTeamOfficialList, getUrlTeamPlayerListCurrent } from '@this/scripts/utility/getUrl';
  import { background } from '@this/scripts/constants/theme';
  import OfficialStatus from '../OfficialStatus';
  import type { ITeamInfo } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let teamInfo: ITeamInfo;

  const initials = teamInfo.ageGroupCode;
  const text = teamInfo.name;
  const playersHref = getUrlTeamPlayerListCurrent(teamInfo.code);
  const officialsHref = getUrlTeamOfficialList(teamInfo.code);
  const colour = background[teamInfo.teamGender ?? teamGenderEnum.mixed];
</script>

<div class="{rootClass} p-2 sm:p-4">
  <div class="border border-gray-300 p-4 lg:p-6">
    <AvatarHeading class="mb-4" {colour} {initials} {text} />
    <div class="flex justify-between w-full text-sm">
      <div class="flex flex-col">
        <PersonLabelledIcon iconClass="text-{colour}-500" text="{teamInfo.totalCount} Players" />
        <hr class="mt-1 mb-1 border border-gray-300 border-t-0" />
        <InsuredLabelledIcon iconClass="text-{colour}-500" text="{teamInfo.insuredCount} Insured" />
        <RegisteredLabelledIcon iconClass="text-{colour}-500" text="{teamInfo.registeredCount} Registered" />
      </div>
      <div class="flex flex-col">
        {#each teamInfo.roles as { name, filled }}
          <OfficialStatus role={name} {filled} {colour} />
        {/each}
      </div>
    </div>
    <div class="mt-4 flex justify-between w-full text-sm">
      <a class="border border-gray-300 px-3 py-1" href={playersHref}>Players</a>
      <a class="border border-gray-300 px-3 py-1" href={officialsHref}>Officials</a>
    </div>
  </div>
</div>

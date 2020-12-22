<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import CalendarLabelledIcon from '@this/components/labelledIcon/CalendarLabelledIcon';
  import PlayerTransferredLabelledIcon from '@this/components/labelledIcon/PlayerTransferredLabelledIcon';
  import { background } from '@this/constants/theme';
  import type { ITeamPlayerTransferred } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let player: ITeamPlayerTransferred;

  const initials = player.initials;
  const text = `${player.lastName}, ${player.firstName}`;
  const href = `/players/${player.footyWebNumber}`;
  const club = player.club;
  const label = player.lastTransferDate ?? 'Unknown';
  const colour = background[player.gender] ?? 'gray';
</script>

<a class="{rootClass} p-2" {href}>
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <AvatarHeading {colour} {initials} {text} />
    <span class="flex justify-end text-sm">
      <PlayerTransferredLabelledIcon class="mr-2" iconClass="text-{colour}-500" {club} />
      <CalendarLabelledIcon iconClass="text-{colour}-500" {label} />
    </span>
  </div>
</a>

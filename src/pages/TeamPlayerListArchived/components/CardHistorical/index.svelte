<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import CalendarLabelledIcon from '@this/components/labelledIcon/CalendarLabelledIcon';
  import { background } from '@this/constants/theme';
  import { getUrlPlayer } from '@this/utility/getUrl';
  import type { ITeamPlayersHistorical } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let player: ITeamPlayersHistorical;

  const initials = player.initials;
  const text = `${player.lastName}, ${player.firstName}`;
  const href = getUrlPlayer(player.footyWebNumber);
  const label = `Last Transaction: ${player.lastTransactionDate ?? 'Unknown'}`;
  const colour = background[player.gender] ?? 'gray';
</script>

<a class="{rootClass} flex flex-col sm:flex-row sm:justify-between p-2" {href}>
  <AvatarHeading {colour} {initials} {text} />
  <span class="flex justify-end">
    <CalendarLabelledIcon class="text-sm" iconClass="text-{colour}-500" {label} />
  </span>
</a>

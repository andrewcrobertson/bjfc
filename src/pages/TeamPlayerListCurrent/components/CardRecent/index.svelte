<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import DateLabelledIcon from '@this/components/labelledIcon/DateLabelledIcon';
  import { background } from '@this/constants/theme';
  import type { ITeamPlayerRecent } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let player: ITeamPlayerRecent;

  const initials = player.initials;
  const text = `${player.lastName}, ${player.firstName}`;
  const href = `/players/${player.footyWebNumber}`;
  const date = `Last Transaction: ${player.lastTransactionDate ?? 'Unknown'}`;
  const colour = background[player.gender] ?? 'gray';
</script>

<a class="{rootClass} p-2" {href}>
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <AvatarHeading {colour} {initials} {text} />
    <span class="flex justify-end text-sm">
      <DateLabelledIcon iconClass="text-{colour}-500" {date} />
    </span>
  </div>
</a>

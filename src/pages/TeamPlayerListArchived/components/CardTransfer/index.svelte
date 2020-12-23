<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import PlayerTransferredLabelledIcon from '@this/components/labelledIcon/PlayerTransferredLabelledIcon';
  import { background } from '@this/constants/theme';
  import { getUrlPlayer } from '@this/utility/getUrl';
  import type { ITeamPlayerTransferred } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let player: ITeamPlayerTransferred;

  const initials = player.initials;
  const text = `${player.lastName}, ${player.firstName}`;
  const href = getUrlPlayer(player.footyWebNumber);
  const colour = background[player.gender] ?? 'gray';
</script>

<a class="{rootClass} flex flex-col sm:flex-row sm:justify-between p-2" {href}>
  <AvatarHeading {colour} {initials} {text} />
  <span class="flex justify-end text-sm">
    <PlayerTransferredLabelledIcon class="mr-2" iconClass="text-{colour}-500" text={player.clubInfo} />
  </span>
</a>

<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import PlayerStatusLabelledIcon from '@this/components/labelledIcon/PlayerStatusLabelledIcon';
  import { background } from '@this/constants/theme';
  import { getUrlPlayer } from '@this/utility/getUrl';
  import type { ITeamPlayerActive } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let player: ITeamPlayerActive;

  const initials = player.initials;
  const text = `${player.lastName}, ${player.firstName}`;
  const status = player.status;
  const href = getUrlPlayer(player.footyWebNumber);
  const colour = background[player.gender] ?? 'gray';
</script>

<a class="{rootClass} flex flex-col sm:flex-row sm:justify-between p-2" {href}>
  <AvatarHeading {colour} {initials} {text} />
  <span class="flex justify-end text-sm">
    <PlayerStatusLabelledIcon iconClass="text-{colour}-500" {status} />
  </span>
</a>

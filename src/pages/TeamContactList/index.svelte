<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import { background } from '@this/scripts/constants/theme';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelPlayer from './components/PanelPlayer';
  import type { IState } from './state';
  export let state: IState;

  const initials = state.ageGroupCode;
  const text = state.name;
  const colour = background[state.teamGender];

  pageTitle.set('Contact');
</script>

<div class="container mx-auto xl:py-10">
  <AvatarHeading {colour} {initials} {text} />
  <PanelPlayer class="mt-2" players={state.playersActive} emptyMessage="There are no active players" />
  <PanelPlayer class="mt-2" players={state.playersRecent} emptyMessage="There are no recent players" />
  <PanelPlayer class="mt-2" players={state.playersHistorical} emptyMessage="There are no historical players" />
  <PanelPlayer class="mt-2" players={state.playersTransferred} emptyMessage="There are no transferred players" />
</div>

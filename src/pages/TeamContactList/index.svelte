<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelPlayer from './components/PanelPlayer';
  import type { IState } from './state';
  import logoUrl from './logo.jpg';
  export let state: IState;

  const initials = state.ageGroupCode;
  const text = state.name;

  pageTitle.set('Contact');
</script>

<style>
  #watermark {
    position: fixed;
    bottom: 0;
    right: -270px;
    opacity: 0.2;
    z-index: 99;
  }

  .container {
    margin-left: 20px;
  }
</style>

<div class="container py-10">
  <img id="watermark" src={logoUrl} alt="Warermark" />
  <AvatarHeading colour="gray" {initials} {text} />
  <PanelPlayer class="pt-2 pb-2" players={state.playersActive} heading="Active Players" emptyMessage="There are no active players" />
  <PanelPlayer class="pt-2 pb-2" players={state.playersRecent} heading="Recent Players" emptyMessage="There are no recent players" />
  <PanelPlayer class="pt-2 pb-2" players={state.playersHistorical} heading="Historical Players" emptyMessage="There are no historical players" />
  <PanelPlayer class="pt-2 pb-2" players={state.playersTransferred} heading="Transferred Players" emptyMessage="There are no transferred players" />
</div>

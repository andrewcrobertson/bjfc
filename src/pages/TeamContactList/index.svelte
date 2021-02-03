<script lang="ts">
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelPlayer from './components/PanelPlayer';
  import type { IState } from './state';
  import logoUrl from './logo.jpg';
  export let state: IState;

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

<div class="container">
  <img id="watermark" src={logoUrl} alt="Warermark" />
  <h2 class="text-lg font-medium title-font pb-2">{state.name}</h2>
  <PanelPlayer class="pt-2 pb-2" players={state.playersActive} heading="Active Players" emptyMessage="There are no active players" />
  <PanelPlayer class="pt-2 pb-2" players={state.playersRecent} heading="Recent Players" emptyMessage="There are no recent players" />
  <PanelPlayer class="pt-2 pb-2" players={state.playersHistorical} heading="Historical Players" emptyMessage="There are no historical players" />
  <!-- <PanelPlayer class="pt-2 pb-2" players={state.playersTransferred} heading="Transferred Players" emptyMessage="There are no transferred players" /> -->
</div>

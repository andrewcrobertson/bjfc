<script lang="ts" context="module">
  export async function preload(page, session) {
    const { code } = page.params;
    return { code };
  }
</script>

<script lang="ts">
  import PlayerDetailPage from '@this/pages/PlayerDetail';
  export let code: string = null;
</script>

<PlayerDetailPage {code} />

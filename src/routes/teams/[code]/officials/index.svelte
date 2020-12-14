<script lang="ts" context="module">
  export async function preload(page, session) {
    const { code } = page.params;
    return { code };
  }
</script>

<script lang="ts">
  import TeamOfficialListPage from '@this/pages/TeamOfficialList';
  export let code: string = null;
</script>

<TeamOfficialListPage {code} />

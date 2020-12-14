<script lang="ts" context="module">
  export async function preload(page, session) {
    const { code } = page.params;
    return { code };
  }
</script>

<script lang="ts">
  import TeamMemberListPage from '@this/pages/TeamMemberList';
  export let code: string = null;
</script>

<TeamMemberListPage {code} />

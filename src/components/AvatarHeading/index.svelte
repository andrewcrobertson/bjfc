<script lang="ts">
  import map from 'lodash/map';
  import join from 'lodash/join';
  import split from 'lodash/split';

  let rootClass = '';
  export { rootClass as class };
  export let initials = null;
  export let text = '';
  export let colour = 'gray';

  const i =
    initials ??
    join(
      map(split(text.replace(/[^a-z0-9 ]/gi, ''), ' '), (w) => w[0]),
      ''
    ).toUpperCase();
</script>

<div class="{rootClass} flex items-center">
  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{i}</div>
  <h2 class="text-lg font-medium title-font truncate ml-2">{text}</h2>
</div>

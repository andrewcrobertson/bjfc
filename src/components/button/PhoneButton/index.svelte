<script lang="ts">
  import split from 'lodash/split';
  import join from 'lodash/join';
  import PhoneIcon from '@this/components/icon/PhoneIcon';
  import ChatAltIcon from '@this/components/icon/ChatAltIcon';
  let rootClass = '';
  export { rootClass as class };
  export let phone = null;
  export let colour = 'gray';

  const sanitisePhone = (phone: string) => join(split(phone, ' '), '');
</script>

<div class="flex">
  {#if phone === null}
    <div class="{rootClass} cursor-default inline-flex flex-grow items-center text-sm bg-gray-100 border border-gray-300 px-3 py-3">
      <PhoneIcon class="w-5 h-5 text-gray-500 mr-2" />
      Not Listed
    </div>
    <div class="{rootClass} cursor-default inline-flex items-center text-sm bg-gray-100 border border-gray-300 border-l-0 px-6">
      <ChatAltIcon class="w-5 h-5 text-gray-500" />
    </div>
  {:else}
    <a class="{rootClass} inline-flex flex-grow items-center text-sm border border-gray-300 px-3 py-3" href="tel:{sanitisePhone(phone)}">
      <PhoneIcon class="w-5 h-5 text-{colour}-500 mr-2" />
      {phone}
    </a>
    <a class="{rootClass} inline-flex items-center text-sm border border-gray-300 border-l-0 px-6" href="sms:{sanitisePhone(phone)}">
      <ChatAltIcon class="w-5 h-5 text-{colour}-500" />
    </a>
  {/if}
</div>

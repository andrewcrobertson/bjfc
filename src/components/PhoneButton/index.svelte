<script lang="ts">
  import split from 'lodash/split';
  import join from 'lodash/join';
  import PhoneIcon from '@this/icons/PhoneIcon';
  import ChatAltIcon from '@this/icons/ChatAltIcon';
  let rootClass = '';
  export { rootClass as class };
  export let phone = null;
  export let label = 'Phone';
  export let colour = 'gray';

  const sanitisePhone = (phone: string) => join(split(phone, ' '), '');
</script>

<div class="flex">
  {#if phone === null}
    <div class="{rootClass} cursor-default inline-flex flex-grow items-center leading-none text-sm bg-gray-100 border border-gray-300 px-6 py-3 ">
      <PhoneIcon class="inline w-5 h-5 mr-1 text-{colour}-500" />
      {label}: Not Listed
    </div>
    <a
      class="{rootClass} inline-flex items-center leading-none text-sm bg-gray-100 border border-gray-300 border-l-0 px-6 py-3"
      href="sms:{sanitisePhone(phone)}">
      <ChatAltIcon class="inline w-5 h-5 text-{colour}-500 mr-1" />
    </a>
  {:else}
    <a class="{rootClass} inline-flex flex-grow items-center leading-none text-sm border border-gray-300 px-6 py-3 " href="tel:{sanitisePhone(phone)}">
      <PhoneIcon class="inline w-5 h-5 text-{colour}-500 mr-1" />
      {label}:
      {phone}
    </a>
    <a class="{rootClass} inline-flex items-center leading-none text-sm border border-gray-300 border-l-0 px-6 py-3 " href="sms:{sanitisePhone(phone)}">
      <ChatAltIcon class="inline w-5 h-5 text-{colour}-500 mr-1" />
    </a>
  {/if}
</div>

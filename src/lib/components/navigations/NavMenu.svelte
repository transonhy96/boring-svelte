<script lang="ts">
	import MenuItem from './NavMenuItem.svelte';

	export let isExpanded = false;
	let activeMenu = 'Portfolio';
	const setActiveMenu = (mn: string) => {
		activeMenu = mn;
	};
</script>

<div class="space-y-3">
	<MenuItem
		toggle={() => {
			setActiveMenu('Portfolio');
		}}
		active={activeMenu === 'Portfolio'}
		expanded={isExpanded}
		icon={'ic:outline-space-dashboard'}
		title="Portfolio"
	/>
	<MenuItem
		toggle={() => {
			setActiveMenu('Crops');
		}}
		active={activeMenu === 'Crops'}
		expanded={isExpanded}
		icon={'healthicons:agriculture-worker'}
		title="Crops"
	/>
	<MenuItem
		toggle={() => {
			setActiveMenu('Swap');
		}}
		active={activeMenu === 'Swap'}
		expanded={isExpanded}
		icon={'material-symbols:swap-calls-rounded'}
		title="Swap"
	/>
	<MenuItem
		toggle={() => {
			setActiveMenu('Settings');
		}}
		active={activeMenu === 'Settings'}
		expanded={isExpanded}
		icon={'uiw:setting-o'}
		title="Settings"
	/>
</div>

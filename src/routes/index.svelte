<script lang="ts">
	import { get } from 'svelte/store'
	import Layout from './__layout.svelte'

	// Lista med vaccin som finns
	let existingVaccines: string[] = ['COVID-19', 'Hepatit A', 'Mässling', 'Polio']
	// Lista med tagna vaccin
	let takenVaccines: string[] = []

	// Värde på nytt vaccin
	let newVaccine: string = ''
	function addVaccine() {
		existingVaccines.push(newVaccine)
		// Svelte vet bara att något nytt uppdateras vid explicit assignment
		existingVaccines = existingVaccines
		newVaccine = ''
		console.log(existingVaccines)
	}

	function removeVaccine(vaccine: string) {
		// Ta bord från vaccin lista
		// (ställe)
		{
			let index = existingVaccines.indexOf(vaccine)
			existingVaccines.splice(index, 1)
			existingVaccines = existingVaccines
		}

		{
			// Ta bort från tagna
			let index = takenVaccines.indexOf(vaccine)
			if (index > -1) {
				takenVaccines.splice(index, 1)
				takenVaccines = takenVaccines
			}
		}
	}

	let countryVaccineInfo: Map<string, string[]> = new Map()
	countryVaccineInfo.set('USA', ['Mässling', 'Polio'])
	countryVaccineInfo.set('Sverige', ['COVID-19', 'Polio'])

	let chosenCountry: string | undefined = undefined

	console.log(takenVaccines.includes('COVID-19'))
</script>

<h1 class="text-6xl">Vaccinkoll</h1>

<hr />
<!-- Visa alla vaccin -->
{#each existingVaccines as vaccine (vaccine)}
	<div>
		{vaccine}
		<input type="checkbox" bind:group={takenVaccines} value={vaccine} />
		<span on:click={() => removeVaccine(vaccine)}>X</span>
	</div>
{/each}

<!-- Lägg till vaccin -->
<input class="border-2" placeholder="Nytt vaccin" type="text" bind:value={newVaccine} />
<button on:click={addVaccine}>Lägg till</button>

<hr />

<!-- Visa att det går att välja vaccin -->
<h2 class="text-md">Tagna vaccin</h2>
{#each takenVaccines as vaccine}
	<div>{vaccine}</div>
{/each}

<hr />

<h2>Välj land:</h2>
<select bind:value={chosenCountry}>
	{#each [...countryVaccineInfo.keys()] as country}
		<option value={country}>{country} </option>
	{/each}
</select>

{#if chosenCountry != undefined}
	{#each [...countryVaccineInfo.get(chosenCountry)] as recommendedVaccines}
		<dir>
			{recommendedVaccines}
		</dir>
		{#if !takenVaccines.includes(recommendedVaccines)}
			Inte taget!
		{/if}
	{/each}
{/if}

<script lang="ts">
	// Lista med vaccin som finns
	let existingVaccines: string[] = ['COVID-19', 'Hepatit A', 'Mässning', 'Polio']
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

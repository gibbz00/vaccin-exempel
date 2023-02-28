<script lang="ts">
    // Importerar css som tailwind skapar.
    import "../app.css";
    import data from "../data.json";
	import { autocompleteFilter } from '$lib/utils/autoCompleteFilter'
	import SelectElementReplacement from "$lib/SelectElementReplacement.svelte"
    
    // Map används för att få unika nycklar (länder) kopplade med en array av värden (rekommenderade vaccin).
    let länder = new Map()
    // En lista med unika vaccin skapad utifrån länders rekommenderade vaccin. 
    let möjligaVaccin = new Set()
    
    async function setupData() {
        // 1. Filter countries in apiData that match those in data.json.
        // 2. Use country name from apiData in select element.

        for (let land of data) {
            await länder.set(
                await fulltNamnLöfte(land.landskod),
                {
                    "vaccin": land.vaccin,
                    "landskod": land.landskod 
                }
            ) 
        }
       
        // Det gör det möjligt att iterera och försöka lägga in varje 
        // rekommenderat vaccin utan att oroa sig för dubbletter.
        for (let info of länder.values()) {
            for (let vaccin  of info.vaccin){
                möjligaVaccin.add(vaccin)
            }
        }
    }
    

    // Skapar en variabel som håller koll på vilket land som valts.
    // Den är tom från början ("") för att indikera att inget land har valts.
    let valtLand = ""

    let tagnaVaccin = []
    
    // omvandla en landskod till ett fullt namn
    async function fulltNamnLöfte(landsKod: String) {
        const url = `https://restcountries.com/v3.1/alpha/${landsKod}`;
        let data = await fetch(url)
        let resultat = await data.json()
        return resultat[0].translations.swe.common
    }

</script>

{#await setupData()}
    ...laddar data
{:then} 
    <body class="bg-[#e7e5e4] grid place-content-center w-screen h-screen">
        <div class="bg-[#fecaca] p-20 space-y-3 rounded-xl">

            <h1 class="text-5xl font-mono font-normal mb-6 place-self-center">Vaccinkollen</h1>
            <h2 class="text-xl font-sans text-zinc-700 max-w-md">
                Registrera vilka vaccin du har tagit, samt vilket land du vill resa till
                för att se om du kan åka dit eller behöver vaccinera dig först!
            </h2>
            <div class="grid sm:grid-flow-col sm:space-x-3 space-y-3 sm:space-y-0">
                <div class="bg-white p-8 rounded-xl ">
                    <h3 class="mb-3 font-sans font-bold">Möjliga vaccin:</h3>
                    <!-- (möjligaVaccin, ländersNamn, ländersVaccin) är ett set och inte en array, #each kan bara loopa över arrays -->
                    <!-- Listan sätts in i en array: [...lista] (array destructuring) -->
                    <ul>
                        {#each [...möjligaVaccin] as vaccin}
                            <li>
                                <input type=checkbox bind:group={tagnaVaccin} value={vaccin}>
                                {vaccin}
                            </li>
                        {/each}
                    </ul>
                </div>
                <div class="bg-white p-8 font-sans rounded-xl">         
                    <h3 class="mb-3 font-sans font-bold">Rekommenderade  vaccin:</h3>   
                    <div class="flex flex-col">
                        <!-- Exempel på hur min SelectElementReplacement funkar //Gabriel -->
                        <!-- Kvar: dynamiskt val av flagga -->
                        <!-- Rekommendation: göra resteran av filen typsäker -->
                        <SelectElementReplacement
                            placeholderText = "Välj land!"
                            optionStringItems={[...länder.keys()]}
                            optionStringFilter={autocompleteFilter}
                            on:selected={(event) => valtLand=event.detail.selected}
                            let:option={option}
                        >
                            <div class="flex items-center">
                                <!-- svelte-ignore a11y-missing-attribute -->
                                <!-- (country name is listed regardless) -->
                                <img class="mr-2 w-8 h-8" src={`https://flagcdn.com/${länder.get(option).landskod.toLowerCase()}.svg`}>
                                {option}
                            </div>
                        </SelectElementReplacement>

                        
                        {#if valtLand != ""}
                            <ul>
                                {#each [...länder.get(valtLand).vaccin] as vaccin}
                                    <li>
                                    <!-- Skriv ut följande symbol om vaccinet har tagits -->
                                    {#if tagnaVaccin.includes(vaccin) }
                                        <span class="text-green-500">
                                            ✓
                                        </span> 
                                    <!-- Skriv ut följande symbol om vaccinet inte har tagits -->
                                    {:else} 
                                        <span class="text-red-500">
                                            X
                                        </span>
                                    {/if}
                                    {vaccin}
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                    </div>
                </div>
            </div>
        </body>
{/await}


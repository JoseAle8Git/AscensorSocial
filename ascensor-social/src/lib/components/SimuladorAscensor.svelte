<script lang="ts">
    import { onMount } from "svelte";

    let centil = 20;
    let resultado: any = null;

    async function cargar() {
        const res = await fetch(`/api/simulador/${centil}`);
        resultado = await res.json();
    }

    onMount(() => {
        cargar();
    });
</script>

<div class="p-6 rounded-xl bg-slate-900 border border-slate-700 shadow-xl">
    <h2 class="text-xl font-bold text-sky-300 mb-2">
        Simulador del Ascensor Social
    </h2>

    <label class="block mb-3">
        <span class="text-slate-300">Selecciona el centil de los padres:</span>
        <input type="range" min="1" max="100" bind:value={centil} on:input={cargar} class="w-full mt-2">
        <span class="text-sky-400 font-semibold">Centil: {centil}</span>
    </label>
    {#if resultado}
        <div class="mt-4 text-slate-200">
            <p>
                <span class="font-bold text-sky-400">Centil esperado del hijo:</span>
                {resultado.centil_hijo.toFixed(1)}
            </p>
            <p>
                <span class="font-bold text-sky-400">Renta estimada del padre:</span>
                {resultado.renta_padre} €
            </p>
            <p>
                <span class="font-bold text-sky-400">Renta estimada del hijo:</span>
                {resultado.renta_hijo} €
            </p>
            <p class="mt-3 text-sky-300 text-sm italic">
                {resultado.centil_hijo > centil
                ? "Según los datos, este hogar tiende a ascender socialmente"
                : resultado.centil_hijo < centil
                ? "Según los datos, este hogar tiende a descender socialmente."
                : "Según los datos, este hogar tiende a mantenerse estable."}
            </p>
        </div>
    {/if}
</div>
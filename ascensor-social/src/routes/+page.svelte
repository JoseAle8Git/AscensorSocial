<script lang="ts">
    import CurvaMovilidad from "$lib/components/CurvaMovilidad.svelte";
    import RankingCCAA from "$lib/components/RankingCCAA.svelte";
</script>

<svelte:head>
    <title>
        Dashboard - Ascensor Social
    </title>
</svelte:head>

<main class="min-h-screen bg-slate-950 text-slate-100">

    <div class="mx-auto max-w-6xl px-4 py-8 space-y-8">

        <!-- Encabezado -->
        <header class="space-y-2">
            Dashboard del Ascensor Social
        </header>
        <p class="text-slate-300 max-w-2xl">
            Visualización interactiva de la movilidad intergeneracional de la renta en España: curvas de movilidad, diferencias territoriales y conversión de centiles a euros.
        </p>

        <!-- Tarjetas principales del dashboard -->
        <section class="grid gap-6 md:grid-cols-2">
            <!-- Curva nacional -->
            <article class="bg-slate-900/70 border border-slate-800 rounded-xl p-4 shadow">
                <h2 class="text-xl font-semibold mb-2">
                    Curva Nacional de Movilidad
                </h2>
                <p class="text-sm text-slate-400 mb-4">
                    Relación entre el centil de renta de los padres y el centil esperado de los hijos.
                </p>
                <div class="h-64 flex items-center justify-center text-slate-500 text-sm">
                    <CurvaMovilidad />
                </div>
            </article>
            <!-- Ranking CCAA -->
            <article class="bg-slate-900/70 border border-slate-800 rounded-xl p-4 shadow">
                <h2 class="text-xl font-semibold mb-2">
                    Movilidad por CCAA (padres en el centil 20)
                </h2>
                <p class="text-sm text-slate-400 mb-4">
                    Comparación del centil medio de los hijos según la comunidad autónoma.
                </p>
                <div class="h-64 flex items-center justify-center text-slate-500 text-sm">
                    <RankingCCAA />
                </div>
            </article>
            <!-- Matriz quitiles -->
            <article class="bg-slate-900/70 border border-slate-800 rounded-xl p-4 shadow">
                <h2 class="text-xl font-semibold mb-2">
                    Matriz de transición de quintiles
                </h2>
                <p class="text-sm text-slate-400 mb-4">
                    Probabilidades de pasar de un quintil de origen a uno de destino entre regiones.
                </p>
                <div class="h-64 flex items-center justify-center text-slate-500 text-sm">
                    Aquí irá el heatmap de quintiles
                </div>
            </article>
            <!-- Conversor centil a euros -->
            <article class="bg-slate-900/70 border border-slate-800 rounded-xl p-4 shadow">
                <h2 class="text-xl font-semibold mb-2">
                    Conversor de centiles a euros
                </h2>
                <p class="text-sm text-slate-400 mb-4">
                    Equivalencia entre posición en la distribución (centil) y renta media en euros para padres e hijos.
                </p>
                <div class="h-64 flex items-center justify-center text-slate-500 text-sm">
                    Aquí irá el gráfico y el simulador con slider
                </div>
            </article>
        </section>

    </div>

</main>
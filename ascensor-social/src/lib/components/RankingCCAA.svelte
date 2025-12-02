<script lang="ts">
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";

    interface RankingEntry {
        ccaa: string;
        centil_hijo: number;
    }

    let canvas: HTMLCanvasElement;
    let datos: RankingEntry[] = [];

    onMount(async () => {
        const res = await fetch('/api/ranking');
        let datosRaw: any[] = await res.json();

        datos = datosRaw.map((d: any): RankingEntry => ({
            ccaa: d.ccaa.trim(),
            centil_hijo: parseFloat(d.centil_hijo_loess)
        })). filter((d: RankingEntry) => !isNaN(d.centil_hijo));

        datos.sort((a: RankingEntry, b: RankingEntry) => b.centil_hijo - a.centil_hijo);

        const ccaa = datos.map((d: RankingEntry) => d.ccaa);
        const hijos = datos.map((d: RankingEntry) => d.centil_hijo);

        new Chart(canvas, {
            type: 'bar',
            data: {
                labels: ccaa,
                datasets: [{
                    label: 'Centil esperado del hijo',
                    data: hijos,
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        min: 0,
                        max: 100
                    }
                }
            }
        });
    });
</script>

<div class="w-full h-full">
    <canvas bind:this={canvas}></canvas>
</div>
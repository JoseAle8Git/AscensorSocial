<script lang="ts">
    import { onMount } from "svelte";
    import { Chart } from "chart.js/auto";

    let canvas: HTMLCanvasElement;

    let datos: any[] = [];

    onMount(async () => {
        const res = await fetch('/api/curva');
        datos = await res.json();

        const curva = datos.filter((d) => d.promedio === 'mediana');

        const centilesPadres = curva.map((d) => parseFloat(d.centil_padres));
        const centilesHijos = curva.map((d) => parseFloat(d.centil_hijo_loess));

        console.log(centilesPadres, centilesHijos);

        new Chart(canvas, {
            type: 'line',
            data: {
                labels: centilesPadres,
                datasets: [ {
                    label: 'Centil esperado del hijo (LOESS)',
                    data: centilesHijos,
                    borderColor: '#38bdf8',
                    borderWidth: 2,
                    tension: 0.25,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Centil de los padres'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Centil esperado del hijo'
                        },
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
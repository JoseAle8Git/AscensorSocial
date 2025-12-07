<script lang="ts">
    import CurvaMovilidad from "$lib/components/CurvaMovilidad.svelte";
    import RankingCCAA from "$lib/components/RankingCCAA.svelte";
    import HeatmapQuintiles from "$lib/components/HeatmapQuintiles.svelte";
    import SimuladorAscensor from "$lib/components/SimuladorAscensor.svelte";
</script>

<svelte:head>
	<title>Dashboard - Ascensor Social</title>
</svelte:head>

<main class="min-h-screen bg-zinc-950 text-slate-100">
	<div class="mx-auto max-w-6xl px-4 py-8 space-y-8">
		<!-- Encabezado -->
		<header id="top" class="text-center py-10 max-w-4xl mx-auto space-y-6">
			<span
				class="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider"
			>
				Datos España
			</span>
			<h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
				Dashboard del
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
					Ascensor Social
				</span>
			</h1>
			<p class="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
				Visualización interactiva de la movilidad intergeneracional de la renta en España: curvas de
				movilidad, diferencias territoriales y conversión de centiles a euros.
			</p>
			<!-- Tarjetas principales del dashboard -->
			<div class="space-y-10">
				<!-- Curva Nacional de Movilidad -->
				<section class="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-lg">
					<header class="mb-4">
						<h2 class="text-xl font-semibold text-white">Curva Nacional de Movilidad</h2>
						<p class="text-slate-300 text-sm">
							Relación entre el centil de renta de los padres y el centil esperado de los hijos.
						</p>
					</header>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
						<!-- Gráfica -->
						<div class="h-[260px] md:h-[320px] lg:h-[360px]">
							<CurvaMovilidad />
						</div>
						<!-- Interpretación -->
						<article class="text-slate-700 text-sm space-y-3">
							<h3 class="font-semibold text-blue-700">¿Qué muestra la gráfica?</h3>
							<p>
								La curva representa la movilidad intergeneracional en España: para cada centil de
								renta de los padres se muestra el centil esperado de los hijos en la edad adulta.
							</p>
							<p>
								En una sociedad totalmente igualitaria la línea sería diagonal (45º). En cambio,
								aquí vemos que los hijos de hogares con rentas bajas tienden a mejorar su posición,
								los de rentas medias se mantienen relativamente estables y los de rentas altas
								concentran ventajas persistentes, especialmente a partir del centil 80.
							</p>
							<p class="font-semibold text-blue-700">Conclusión</p>
							<p>
								España presenta cierta movilidad ascendente en la parte baja de la distribución,
								pero también una fuerte persistencia en la parte alta: quién nace muy arriba tiene
								muchas más probabilidades de seguir estándolo.
							</p>
						</article>
					</div>
				</section>
				<!-- Ranking por CCAA -->
				<section class="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-lg">
					<header class="mb-4">
						<h2 class="text-xl font-semibold text-white">
							Movilidad por CCAA (padres en el centil 20)
						</h2>
						<p class="text-slate-300 text-sm">
							Centil medio de los hijos cuando los padres están en el 20&nbsp;% inferior de la
							distribución.
						</p>
					</header>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
						<!-- Gráfica -->
						<div class="h-[260px] md:h-[320px] lg:h-[360px]">
							<RankingCCAA />
						</div>
						<!-- Interpretación -->
						<article class="text-slate-700 text-sm space-y-3">
							<h3 class="font-semibold text-blue-700">¿Qué muestra la gráfica?</h3>
							<p>
								Cada barra representa una comunidad autónoma y el centil medio que alcanzan los
								hijos cuando los padres se sitúan en el centil 20 de renta nacional.
							</p>
							<p>
								Las CCAA con barras más largas son aquellas donde los hijos de hogares modestos
								consiguen situarse más arriba en la distribución de renta. Las que aparecen más
								abajo reflejan contextos donde el ascenso es más difícil.
							</p>
							<p class="font-semibold text-blue-700">Conclusión</p>
							<p>
								El territorio importa: nacer en ciertas comunidades ofrece más oportunidades de
								movilidad ascendente que en otras, lo que sugiere diferencias en mercado laboral,
								estructura productiva y calidad de servicios públicos.
							</p>
						</article>
					</div>
				</section>
				<!-- Matriz de transición de quintiles -->
				<section class="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-lg">
					<header class="mb-4">
						<h2 class="text-xl font-semibold text-white">Matriz de transición de quintiles</h2>
						<p class="text-slate-300 text-sm">
							Probabilidades de pasar de un quintil de origen a un quintil de destino en la
							distribución de renta.
						</p>
					</header>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
						<!-- Gráfica -->
						<div class="h-[280px] md:h-[360px] lg:h-[420px]">
							<HeatmapQuintiles />
						</div>
						<!-- Interpretación -->
						<article class="text-slate-700 text-sm space-y-3">
							<h3 class="font-semibold text-blue-700">¿Qué muestra la gráfica?</h3>
							<p>
								Cada celda recoge la probabilidad (en porcentaje) de que un hijo termine en un
								quintil de renta determinado, dado el quintil de renta de sus padres. Los colores
								más intensos indican transiciones más frecuentes.
							</p>
							<p>
								La diagonal refleja la persistencia: hijos que permanecen en el mismo quintil que
								sus padres. Las celdas por encima de la diagonal muestran movilidad ascendente y las
								que están por debajo, movilidad descendente.
							</p>
							<p class="font-semibold text-blue-700">Conclusión</p>
							<p>
								La matriz muestra que existe movilidad en todos los niveles, pero también una fuerte
								inercia: los extremos de la distribución (quintil más bajo y más alto) tienden a
								reproducirse entre generaciones.
							</p>
						</article>
					</div>
				</section>
				<!-- Simulador del Ascensor Social -->
				<section class="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-lg">
					<header class="mb-4">
						<h2 class="text-xl font-semibold text-white">Conversor de centiles a euros</h2>
						<p class="text-slate-300 text-sm">
							Equivalencia entre posición en la distribución (centil) y renta media en euros para
							padres e hijos, y simulación del “ascensor social”.
						</p>
					</header>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
						<!-- Simulador -->
						<div class="w-full">
							<SimuladorAscensor />
						</div>
						<!-- Explicación del cálculo -->
						<article class="text-slate-700 text-sm space-y-3">
							<h3 class="font-semibold text-blue-700">¿Cómo se calculan los resultados?</h3>
							<p>
								El usuario elige un centil de renta para los padres. A partir de la curva nacional
								de movilidad se obtiene el centil esperado del hijo utilizando la estimación
								suavizada (LOESS).
							</p>
							<p>
								Después, se consulta el conversor de centiles a euros para los padres y para los
								hijos: cada centil tiene asociada una renta media. Así se obtiene la renta estimada
								de origen y de destino.
							</p>
							<p>
								Finalmente, se compara el centil del hijo con el de los padres para clasificar el
								caso como movilidad ascendente, descendente o estabilidad, y se muestra una
								interpretación automática.
							</p>
							<p class="font-semibold text-blue-700">Conclusión</p>
							<p>
								El simulador traduce la movilidad intergeneracional a cifras concretas de renta,
								permitiendo visualizar cuánto puede ganar o perder un hogar típico al “subir” o
								“bajar” en el ascensor social.
							</p>
						</article>
					</div>
				</section>
			</div>
		</header>
	</div>
</main>
<!-- Footer -->
<footer class="border-t border-slate-200 bg-slate-900 py-8 px-6">
	<div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-300 text-sm">
		<div class="mx-auto">
			<h3 class="text-center font-semibold text-sky-400 mb-3">Proyecto Ascensor Social</h3>
			<p class="text-center">
				Visualización de de movilidad intergeneracional, basada en datos reales de distribución de
				renta y modelos de movilidad social.
			</p>
		</div>
		<div class="mx-auto">
			<h3 class="text-center font-semibold text-sky-400 mb-3">Enlaces útiles</h3>
			<ul class="space-y-2">
				<li><a class="hover:text-white transition" href="#top">Volver arriba</a></li>
				<li>
					<a
						class="hover:text-white transition"
						href="https://github.com/JoseAle8Git/AscensorSocial"
						target="_blank">GitHub Repository</a
					>
				</li>
				<li>
					<a class="hover:text-white transition" href="https://tailwindcss.com" target="_blank"
						>TailwindCSS</a
					>
				</li>
			</ul>
		</div>
		<div class="mx-auto">
			<h3 class="text-center font-semibold text-sky-400 mb-3">Autor</h3>
			<p class="text-center">
				Proyecto desarrollado por <span class="text-white font-medium"
					>Jose Alejandro, Alireza, Alberto</span
				>.
				<br />Diseño, visualizaciones y simulador interactivo.
			</p>
		</div>
	</div>
	<div>
		<div class="mt-8 pt-4 border-t border-slate-700 text-center text-xs text-slate-500">
			© {new Date().getFullYear()} Ascensor Social — Todos los derechos reservados.
		</div>
	</div>
</footer>

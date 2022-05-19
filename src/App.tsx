import { useTransform, useViewportScroll } from 'framer-motion'
import { Linkedin } from '@styled-icons/boxicons-logos'
import { Telephone, Mailbox } from '@styled-icons/bootstrap'

import {
	MainContainer,
	Header,
	HomeContent,
	CursosContent,
	ProjetosContent,
	OrcamentosContent,
	SectWrapper,
	Footer,
} from './app_styles'

function App() {
	const isMobile = window.innerWidth < 600

	const { scrollYProgress } = useViewportScroll()

	const homeTransform = useTransform(scrollYProgress, [0, 0.5], [0, -1000])
	const cursosTransform = useTransform(
		scrollYProgress,
		[0, 0.3, 0.45, 0.55],
		[1500, 0, 0, 1500]
	)
	const projetosTransform = useTransform(
		scrollYProgress,
		[0, 0.55, 0.7, 0.75],
		[-1500, 0, 0, -1500]
	)
	const orcamentosTransform = useTransform(
		scrollYProgress,
		[0, 0.8, 0.85, 0.95],
		[-1500, 0, 0, 0]
	)

	return (
		<MainContainer>
			<Header>
				<h2>
					<a href="#home">Daniela Sperb</a>
				</h2>
				<ul>
					<a href="#home">
						<li>home</li>
					</a>
					<a href="#cursos">
						<li>cursos e treinamentos</li>
					</a>
					<a href="#projetos">
						<li>projetos</li>
					</a>
					<a href="#orcamentos">
						<li>orçamentos</li>
					</a>
				</ul>
			</Header>
			<HomeContent
				drag={!isMobile}
				data-text="Daniela Sperb"
				style={{
					translateX: homeTransform,
				}}
				id="home"
			/>
			<SectWrapper
				style={{
					translateX: cursosTransform,
				}}
				id="cursos"
			>
				<CursosContent>
					<h2>cursos e treinamentos</h2>
					<article>
						<h3>Atendimento ao cliente</h3>
						<p>
							<strong>Carga horária:</strong> 12 horas.
						</p>
						<p>
							<strong>Modalidade:</strong> 9 horas presenciais e 3
							horas de mentoria online.
						</p>
						<p>
							<strong>Skills desenvolvidas:</strong> Comunicação,
							Feedback, Empatia e Visão Estratégica. Abordagem
							humanista com foco em resultados e colaboração de
							equipes.
						</p>
						<p>
							<strong>Conhecimentos abordados:</strong> Testagem
							de feedback, plasticidade do atendimento,
							atendimento afetivo-empático, escuta qualificada,
							mediação de conflitos, comunicação não violenta e
							assertividade da comunicação. Extra: Estudo de caso
							real da empresa contratante com a aplicação de
							métodos que possam ser utilizados em outras áreas do
							negócio.
						</p>
						<div>
							<h4>Objetivos Pedagógicos</h4>
							<ul>
								<li>
									Compreender a dinâmica do atendimento e
									formas de qualificá-lo.
								</li>
								<li>
									Explorar o conceito de consciência
									corporativa e aplicar nas atividades
									diárias.
								</li>
								<li>
									Qualificar o atendimento ao cliente direto
									externo.
								</li>
								<li>
									Aplicar a inteligência analítica e emociona
									nas relações de trabalho.
								</li>
							</ul>
						</div>
					</article>
				</CursosContent>
			</SectWrapper>

			<SectWrapper
				style={{
					translateX: projetosTransform,
				}}
				id="projetos"
			>
				<ProjetosContent>
					<h2>projetos</h2>
					<ul>
						<h3>Contribuições para projetos de:</h3>
						<li>Planejamento Estratégico</li>
						<li>Desenvolvimento de Equipes</li>
						<li>
							Treinamento personalizado, conforme demanda do
							cliente: Análise situacional
						</li>
						<li>Planejamento financeiro</li>
						<li>Projetos sociais: Educação e saúde</li>
					</ul>
				</ProjetosContent>
			</SectWrapper>

			<SectWrapper
				style={{
					translateX: orcamentosTransform,
				}}
				id="orcamentos"
			>
				<OrcamentosContent>
					<h2>orçamentos</h2>
					<article>
						<h3>Para Cursos e Treinamentos</h3>
						<p>
							Valor hora aula: R$ 75,00 a hora/aula - 60 minutos.
							Carga horária mínima por turno: 3 horas/aula. Número
							máximo de alunos por grupo: 15 - Material pedagógico
							não está incluso.
						</p>
					</article>
					<article>
						<h3>Para Projetos e Acessoria</h3>
						<strong>R$ 120,00 hora -</strong> para assessoria
						pontual (contratação de 1 a 3h).
						<br />
						<strong>R$ 80,00 hora -</strong> para assessoria
						sistemática, por período contratado.
					</article>
				</OrcamentosContent>
			</SectWrapper>
			<Footer>
				<a
					target="_blank"
					href="https://www.linkedin.com/in/daniela-fabiane-von-muhlen-sperb-a9987b74?original_referer=https%3A%2F%2Fmail.google.com%2F"
				>
					<Linkedin width={24} />
				</a>
				<a target="_blank" href="mailto:danielafabiane@hotmail.com">
					<Mailbox width={24} />
				</a>
				<a target="_blank" href="tel:+5551991956287">
					<Telephone width={24} />
				</a>
			</Footer>
		</MainContainer>
	)
}

export default App

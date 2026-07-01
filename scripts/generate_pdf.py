#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
BLACKPRINT Guia Completa - Generador de PDF
Estilo: B&W minimalista techwear, fuentes Liberation Sans + Liberation Mono
Salida: /home/z/my-project/download/blackprint-guia-completa.pdf
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor, black, white
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether,
    Table, TableStyle, Flowable, NextPageTemplate, PageTemplate, Frame
)
from reportlab.platypus.flowables import HRFlowable
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

# ============================================================
# FONT REGISTRATION
# ============================================================

pdfmetrics.registerFont(TTFont('Body', '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf'))
pdfmetrics.registerFont(TTFont('Body-Bold', '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf'))
pdfmetrics.registerFont(TTFont('Body-Italic', '/usr/share/fonts/truetype/liberation/LiberationSans-Italic.ttf'))
pdfmetrics.registerFont(TTFont('Mono', '/usr/share/fonts/truetype/liberation/LiberationMono-Regular.ttf'))
pdfmetrics.registerFont(TTFont('Mono-Bold', '/usr/share/fonts/truetype/liberation/LiberationMono-Bold.ttf'))

from reportlab.pdfbase.pdfmetrics import registerFontFamily
registerFontFamily('Body', normal='Body', bold='Body-Bold', italic='Body-Italic', boldItalic='Body-Bold')

# ============================================================
# PALETTE - B&W strict
# ============================================================

C_BG = white
C_FG = HexColor('#0A0A0A')
C_MUTED = HexColor('#4A4A4A')
C_MUTED_LIGHT = HexColor('#6B6B6B')
C_BORDER = HexColor('#D4D4D4')
C_BG_LIGHT = HexColor('#F5F5F5')
C_BG_MID = HexColor('#EBEBEB')

# ============================================================
# STYLES
# ============================================================

styles = {
    'CoverTitle': ParagraphStyle(
        'CoverTitle', fontName='Body-Bold', fontSize=48, leading=52,
        textColor=C_FG, alignment=TA_LEFT, spaceAfter=8
    ),
    'CoverSubtitle': ParagraphStyle(
        'CoverSubtitle', fontName='Body', fontSize=16, leading=22,
        textColor=C_MUTED, alignment=TA_LEFT, spaceAfter=12
    ),
    'CoverTag': ParagraphStyle(
        'CoverTag', fontName='Mono', fontSize=9, leading=12,
        textColor=C_MUTED, alignment=TA_LEFT, spaceAfter=4
    ),
    'H1': ParagraphStyle(
        'H1', fontName='Body-Bold', fontSize=28, leading=34,
        textColor=C_FG, alignment=TA_LEFT, spaceBefore=20, spaceAfter=12
    ),
    'H2': ParagraphStyle(
        'H2', fontName='Body-Bold', fontSize=20, leading=26,
        textColor=C_FG, alignment=TA_LEFT, spaceBefore=18, spaceAfter=10
    ),
    'H3': ParagraphStyle(
        'H3', fontName='Body-Bold', fontSize=14, leading=18,
        textColor=C_FG, alignment=TA_LEFT, spaceBefore=12, spaceAfter=6
    ),
    'H4': ParagraphStyle(
        'H4', fontName='Mono-Bold', fontSize=9, leading=12,
        textColor=C_MUTED, alignment=TA_LEFT, spaceBefore=8, spaceAfter=4
    ),
    'Body': ParagraphStyle(
        'Body', fontName='Body', fontSize=10, leading=15,
        textColor=C_FG, alignment=TA_JUSTIFY, spaceAfter=8
    ),
    'BodyMuted': ParagraphStyle(
        'BodyMuted', fontName='Body', fontSize=9, leading=13,
        textColor=C_MUTED, alignment=TA_JUSTIFY, spaceAfter=6
    ),
    'Mono': ParagraphStyle(
        'Mono', fontName='Mono', fontSize=8, leading=11,
        textColor=C_MUTED, alignment=TA_LEFT, spaceAfter=4
    ),
    'MonoLabel': ParagraphStyle(
        'MonoLabel', fontName='Mono-Bold', fontSize=8, leading=11,
        textColor=C_FG, alignment=TA_LEFT, spaceAfter=4
    ),
    'Bullet': ParagraphStyle(
        'Bullet', fontName='Body', fontSize=10, leading=14,
        textColor=C_FG, alignment=TA_LEFT, leftIndent=14, bulletIndent=4, spaceAfter=4
    ),
    'BulletMuted': ParagraphStyle(
        'BulletMuted', fontName='Body', fontSize=9, leading=13,
        textColor=C_MUTED, alignment=TA_LEFT, leftIndent=14, bulletIndent=4, spaceAfter=3
    ),
    'Pull': ParagraphStyle(
        'Pull', fontName='Body-Italic', fontSize=11, leading=16,
        textColor=C_MUTED, alignment=TA_LEFT, leftIndent=16, spaceAfter=8
    ),
    'Footer': ParagraphStyle(
        'Footer', fontName='Mono', fontSize=7, leading=9,
        textColor=C_MUTED, alignment=TA_LEFT
    ),
}

# ============================================================
# PAGE TEMPLATES
# ============================================================

PAGE_W, PAGE_H = A4
MARGIN_L = 22 * mm
MARGIN_R = 22 * mm
MARGIN_T = 26 * mm
MARGIN_B = 22 * mm

def draw_cover_background(canv, doc):
    """Cover page: grid background + minimal layout"""
    canv.saveState()
    # Grid pattern
    canv.setStrokeColor(C_BG_MID)
    canv.setLineWidth(0.3)
    grid = 14 * mm
    x = 0
    while x < PAGE_W:
        canv.line(x, 0, x, PAGE_H)
        x += grid
    y = 0
    while y < PAGE_H:
        canv.line(0, y, PAGE_W, y)
        y += grid
    # Top bar
    canv.setFillColor(C_FG)
    canv.rect(0, PAGE_H - 4*mm, PAGE_W, 4*mm, fill=1, stroke=0)
    # Bottom bar
    canv.rect(0, 0, PAGE_W, 4*mm, fill=1, stroke=0)
    canv.restoreState()

def draw_body_decorations(canv, doc):
    """Body pages: minimal header + footer + progress"""
    canv.saveState()
    # Top header bar
    canv.setStrokeColor(C_BORDER)
    canv.setLineWidth(0.3)
    canv.line(MARGIN_L, PAGE_H - 18*mm, PAGE_W - MARGIN_R, PAGE_H - 18*mm)
    # Header text
    canv.setFont('Mono', 7)
    canv.setFillColor(C_MUTED)
    canv.drawString(MARGIN_L, PAGE_H - 14*mm, 'BLACKPRINT / GUIA MAESTRA')
    canv.drawRightString(PAGE_W - MARGIN_R, PAGE_H - 14*mm, 'BP-001 v2.2')
    # Footer
    canv.setStrokeColor(C_BORDER)
    canv.line(MARGIN_L, 16*mm, PAGE_W - MARGIN_R, 16*mm)
    canv.setFont('Mono', 7)
    canv.setFillColor(C_MUTED)
    canv.drawString(MARGIN_L, 11*mm, 'Techwear / Espana / 2026')
    page_num = canv.getPageNumber()
    canv.drawRightString(PAGE_W - MARGIN_R, 11*mm, f'Pag. {page_num:02d}')
    canv.restoreState()

# ============================================================
# CUSTOM FLOWABLES
# ============================================================

class SectionDivider(Flowable):
    """Visual divider with section number"""
    def __init__(self, number, title, width=None):
        Flowable.__init__(self)
        self.number = number
        self.title = title
        self.width = width or (PAGE_W - MARGIN_L - MARGIN_R)
        self.height = 24*mm

    def draw(self):
        c = self.canv
        # Number big
        c.setFont('Mono-Bold', 36)
        c.setFillColor(C_FG)
        c.drawString(0, 4*mm, self.number)
        # Title
        c.setFont('Body-Bold', 18)
        c.setFillColor(C_FG)
        c.drawString(28*mm, 12*mm, self.title)
        # Bottom line
        c.setStrokeColor(C_FG)
        c.setLineWidth(1)
        c.line(0, 0, self.width, 0)
        # Tiny tag
        c.setFont('Mono', 7)
        c.setFillColor(C_MUTED)
        c.drawRightString(self.width, 16*mm, f'SECCION {self.number}')


class StatBlock(Flowable):
    """Stats row for cover"""
    def __init__(self, stats, width=None):
        Flowable.__init__(self)
        self.stats = stats  # list of (label, value)
        self.width = width or (PAGE_W - MARGIN_L - MARGIN_R)
        self.height = 22*mm

    def draw(self):
        c = self.canv
        col_w = self.width / len(self.stats)
        # Border box
        c.setStrokeColor(C_FG)
        c.setLineWidth(0.8)
        c.rect(0, 0, self.width, self.height, fill=0, stroke=1)
        # Vertical dividers
        for i in range(1, len(self.stats)):
            c.line(col_w * i, 0, col_w * i, self.height)
        # Content
        for i, (label, value) in enumerate(self.stats):
            x = col_w * i + col_w / 2
            c.setFont('Mono', 7)
            c.setFillColor(C_MUTED)
            c.drawCentredString(x, self.height - 5*mm, label.upper())
            c.setFont('Body-Bold', 13)
            c.setFillColor(C_FG)
            c.drawCentredString(x, 4*mm, value)


# ============================================================
# HELPER: section header
# ============================================================

def section_header(num, title):
    """Returns a flowable list for a section header"""
    return [
        SectionDivider(num, title),
        Spacer(1, 6*mm),
    ]

def h2(text):
    return Paragraph(text, styles['H2'])

def h3(text):
    return Paragraph(text, styles['H3'])

def body(text):
    return Paragraph(text, styles['Body'])

def body_muted(text):
    return Paragraph(text, styles['BodyMuted'])

def mono_label(text):
    return Paragraph(text.upper(), styles['MonoLabel'])

def pull(text):
    return Paragraph(text, styles['Pull'])

def bullet(text, muted=False):
    style = styles['BulletMuted'] if muted else styles['Bullet']
    return Paragraph(f'• {text}', style)

def spacer(h=4*mm):
    return Spacer(1, h)

def hr(thickness=0.4, color=C_BORDER, space=4*mm):
    return HRFlowable(width='100%', thickness=thickness, color=color, spaceBefore=space, spaceAfter=space)


print("Script Part 1 loaded: setup, fonts, styles, flowables.")
print("Continue with content data in next chunk.")

# ============================================================
# CONTENT - COVER & INTRO
# ============================================================

def build_cover():
    return [
        Spacer(1, 30*mm),
        Paragraph('DOC // BP-001', styles['CoverTag']),
        Paragraph('VERSION 2.2 / 2026', styles['CoverTag']),
        Spacer(1, 30*mm),
        Paragraph('DE CERO', styles['CoverTitle']),
        Paragraph('A PRIMER', styles['CoverTitle']),
        Paragraph('<font color="#6B6B6B">DROP.</font>', styles['CoverTitle']),
        Spacer(1, 16*mm),
        Paragraph(
            'Una hoja de ruta visual para crear una marca streetwear techwear desde cero. '
            'Sin tecnicismos. Sin humo. Disenada para alguien que nunca ha tocado diseno, '
            'ni webs, ni fabricacion, y quiere lanzar su primer drop en seis meses.',
            styles['CoverSubtitle']
        ),
        Spacer(1, 20*mm),
        StatBlock([
            ('Duracion', '6 meses'),
            ('Inversion cursos', '<= 50 euros'),
            ('Fases roadmap', '05'),
            ('Nivel tecnico', 'Cero'),
        ]),
        Spacer(1, 30*mm),
        Paragraph('GUIA MAESTRA / ROADMAP / BLACKPRINT', styles['CoverTag']),
        PageBreak(),
    ]


def build_intro():
    story = []
    story.extend(section_header('00', 'Sobre esta guia'))
    story.append(h2('No necesitas saber de diseno, ni de codigo, ni de moda. Solo necesitas seguir los pasos en orden.'))
    story.append(body(
        'Esta guia esta dividida en 5 fases que cubren 6 meses. Cada fase tiene tareas concretas '
        'y marcables. Tu progreso se guarda en el navegador en la version web. Aqui en el PDF puedes '
        'tachar las tareas a mano. Tacha una cada vez que la completes, sin prisa pero sin pausa.'
    ))
    story.append(body(
        'Antes del roadmap encontraras 2 secciones de profundizacion: la primera sobre como definir tu '
        'marca desde cero (concepto, cliente ideal, estilo), la segunda sobre como se disena ropa '
        '(de 0 a 100, asumiendo que no sabes nada). Dedica tiempo a ambas. Sin esa base, el roadmap '
        'es solo una lista de tareas sin alma.'
    ))
    story.append(h3('Que NO es esta guia'))
    story.append(body(
        'No es un curso acelerado de diseno. No te promete que seras Supreme en 6 meses. '
        'No te vende nada. Es un mapa honesto: hace explicito el camino real que recorren las marcas '
        'que duran. Lo que hagas con el depende de tu constancia.'
    ))
    story.append(body(
        'Tampoco es un manual de negocio. Si buscas como montar una SL, hacer declaraciones de IVA '
        'o gestionar inventario contablemente, necesitaras un asesor. Aqui nos centramos en lo '
        'creativo y lo esencial para lanzar.'
    ))
    story.append(h3('Tres principios fundacionales'))
    principle_data = [
        ['01', 'Identidad antes que producto',
         'Las marcas que duran saben que son ANTES de coser una sola prenda. Tu marca es una opinion, no un logo. Si no sabes que opinas, nadie te seguira.'],
        ['02', 'Comunidad antes que venta',
         'Si tienes 100 personas que de verdad quieren lo que haces, tienes un negocio. Si tienes 10.000 curiosos, tienes ruido. Construye comunidad, no audiencia.'],
        ['03', 'Pequeno, perfecto, repetido',
         'Un primer drop de 3 prendas excepcionales vale mas que uno de 10 mediocres. Empieza enfocado, crece con criterio. La constancia vence al talento.'],
    ]
    t = Table(principle_data, colWidths=[12*mm, 50*mm, 104*mm])
    t.setStyle(TableStyle([
        ('FONTNAME', (0,0), (0,-1), 'Mono-Bold'),
        ('FONTNAME', (1,0), (1,-1), 'Body-Bold'),
        ('FONTNAME', (2,0), (2,-1), 'Body'),
        ('FONTSIZE', (0,0), (0,-1), 10),
        ('FONTSIZE', (1,0), (1,-1), 10),
        ('FONTSIZE', (2,0), (2,-1), 9),
        ('TEXTCOLOR', (0,0), (0,-1), C_MUTED),
        ('TEXTCOLOR', (1,0), (1,-1), C_FG),
        ('TEXTCOLOR', (2,0), (2,-1), C_MUTED),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LINEABOVE', (0,0), (-1,0), 0.5, C_BORDER),
        ('LINEBELOW', (0,0), (-1,-1), 0.5, C_BORDER),
        ('LINEBEFORE', (1,1), (1,-1), 0.3, C_BORDER),
    ]))
    story.append(t)
    story.append(spacer(8*mm))
    story.append(pull(
        '"Las marcas que vale la pena construir tardan mas en construirse, pero tambien duran mas." '
        'Anonimo, en algun foro de streetwear que ya no existe.'
    ))
    story.append(PageBreak())
    return story


# ============================================================
# CONTENT - CONCEPTO (7 pasos)
# ============================================================

concepto_steps = [
    {
        'num': '01',
        'title': 'Autoconocimiento: quien eres tu?',
        'duration': '2 a 3 dias',
        'intro': 'Antes de buscar inspiracion fuera, mira hacia dentro. Las marcas que duran nacen de una conviccion personal, no de una oportunidad de mercado. Si no sabes que te define, tu marca sera generica.',
        'body': [
            'Coge una libreta y responde por escrito a 20 preguntas sobre ti. Que ropa llevas cada dia. Que marcas admiras y por que. Que odias de la moda actual. Que subculturas te influyen (skate, hip-hop, gamer, climbing, anime, futbol). Que musica escuchas. Que peliculas y series. Que barrios o ciudades te gustan. Sin filtros, sin pensar que suena bien. Solo honestidad.',
            'El objetivo no es encontrar una marca, es encontrarte a ti. Una marca techwear autentica nace de alguien que de verdad vive esa estetica. Si solo te gusta "porque vende", la audiencia lo notara en tres posts.',
            'Cuando termines, subraya las 5 respuestas que te hayan sorprendido. Esas son las semillas de tu marca. Las demas son ruido.',
        ],
        'exercise': 'Ejercicio de las 5 palabras. Despues del cuestionario, elige 5 palabras que te definan como persona (no como marca). Ejemplos: minimalista, obsesivo, urbano, melancolico, funcional. Estas 5 palabras seran tu filtro: cada decision de marca debera ser coherente con al menos 3 de ellas.',
        'pitfall': 'Error comun: copiar las 5 palabras de tu marca referente. Si dices "minimalista, tecnico, futurista, funcional, urbano" estas describiendo Acronym, no a ti. Busca tu propia combinacion, aunque sea mas rara.',
    },
    {
        'num': '02',
        'title': 'Tecnicas de brainstorming para encontrar tu concepto',
        'duration': '3 a 4 dias',
        'intro': 'El brainstorming no es sentarse a esperar la inspiracion. Es una tecnica con metodo. Aqui tienes 3 que funcionan para fundadores principiantes.',
        'body': [
            'Primera tecnica: el mapa mental. Escribe en el centro de un A3 una palabra que te defina (por ejemplo, "resistencia"). Desde ahi, dibuja ramas con palabras asociadas (montana, ciudad, militar, supervivencia, escudo). De cada rama salen subramas. Llena el A3. Cuando termines, busca patrones: hay grupos de palabras que se repiten? Esos son tus ejes conceptuales.',
            'Segunda tecnica: los 5 Por Ques. Escribe tu idea inicial de marca como afirmacion ("Quiero crear una marca de ropa techwear"). Preguntate "por que" y responde. Vuelve a preguntar "por que" sobre esa respuesta. Cinco veces. Al final llegaras a algo honesto, probablemente mas personal que "para hacerme rico". Ese motivo profundo es el motor real de la marca.',
            'Tercera tecnica: la escritura libre de 15 minutos. Pon un cronometro. Escribe sin parar sobre la pregunta "que quiero que la gente sienta al ponerse mi ropa?". No corrijas, no releas. Cuando suene el cronometro, lee. Las frases mas potentes son las que escribiste en los ultimos 5 minutos, cuando dejaste de pensar.',
        ],
        'exercise': 'Banco de 100 conceptos. Tras las 3 tecnicas, escribe una lista de 100 palabras o frases que aparecieron en tus exploraciones. Si, 100. La regla es: las primeras 30 son obvias, las 30 siguientes son mas raras, y las ultimas 40 son donde aparece el oro. Las fuerzas creativas surgen cuando el cerebro se aburre de las respuestas obvias.',
        'pitfall': 'Error comun: casarte con la primera idea. Las primeras 20 ideas de cualquier creativo suelen ser cliches heredados. Itera hasta llegar a la 50 o la 60.',
    },
    {
        'num': '03',
        'title': 'Donde y como encontrar inspiracion real',
        'duration': '1 semana',
        'intro': 'La inspiracion no se busca en Instagram. Se busca en la vida real, en archivos, en libros, en conversaciones. Las marcas mediocres se inspiran en Instagram. Las marcas memorables se inspiran en cualquier otra cosa.',
        'body': [
            'Pinterest es tu primera parada, pero usalo bien. Crea 3 tableros separados: "Siluetas y prendas", "Paletas y texturas", "Fotografia y actitud". Minimo 30 pins por tablero. La regla: si un pin no encaja con el resto, descartalo. NO pinnees todo lo que te gusta. Pinnea solo lo que se parece entre si.',
            'Mas alla de Pinterest, mira archivos. Archivos de revistas antiguas (Highsnobiety, i-D, Dazed tienen hemerotecas online). Catalogos militares originales (las fotos de catalogos de militares de los 90 son oro para techwear). Peliculas (Blade Runner, Akira, Tetsuo, The Matrix). Videojuegos (Cyberpunk 2077, Death Stranding). La inspiracion de calidad no esta en feeds algoritmicos.',
            'Pero sobre todo: sal a la calle. Techwear nacio en ciudades (Tokio, Berlin, NYC). Camina por tu ciudad con camara. Fotografia detalles urbanos: rampas, rampas de metro, senales, desagues, postes, todo lo que tenga una funcion tecnica. Esa es tu biblioteca visual autentica, no la de Pinterest.',
        ],
        'exercise': 'Diario visual de 7 dias. Durante 7 dias, haz minimo 5 fotos al dia de cosas que veas en tu dia a dia y que te transmitan algo. NO filtres por estetica. Al final de la semana, revisa las 35 fotos. Veras patrones. Esos patrones son tu mirada, y tu mirada es tu marca.',
        'pitfall': 'Error comun: usar el algoritmo de Instagram como unica fuente. El algoritmo te muestra lo que ya te gusta. Tu marca sera una copia de una copia. Rompe el loop buscando en sitios donde el algoritmo no te conoce.',
    },
    {
        'num': '04',
        'title': 'Definir el concepto y escribir tu manifiesto',
        'duration': '3 a 4 dias',
        'intro': 'El concepto es la idea central que sostiene toda la marca. El manifiesto es su declaracion publica. Sin un concepto claro, tomas decisiones al azar. Con un concepto, cada decision se filtra.',
        'body': [
            'Un buen concepto responde a 3 preguntas: que defiendes, contra que te rebelas y que tipo de vida quieres que tu cliente viva. Por ejemplo, el concepto de Acronym podria resumirse asi: defiendo la ropa como herramienta, me rebelo contra la moda decorativa, quiero que mi cliente viva la ciudad como un terreno tecnico. Tres frases, una direccion.',
            'El manifiesto es la version escrita de tu concepto, dirigida a tu cliente ideal. Maximo 1 pagina, idealmente 3 parrafos cortos. Parrafo 1: que defiendes. Parrafo 2: contra que te rebelas. Parrafo 3: que tipo de vida quieres que tu cliente viva con tu ropa. Lenguaje honesto, no marketing. Sin eslogans. Sin emojis.',
            'Lee tu manifiesto en voz alta. Si suena pretencioso, reescribelo. Si suena plano, anade mas concrecion. Si tuviera que tatuarte una frase del manifiesto en el brazo, cual seria? Esa frase es tu tagline.',
        ],
        'exercise': 'Test del desconocido. Lee tu manifiesto a 3 personas que no te conozcan (puede ser por DM a desconocidos en Reddit). Preguntales: que tipo de ropa crees que vende esta persona? Se la comprarias? Si las respuestas no coinciden con tu intencion, el manifiesto no comunica bien. Reescribe.',
        'pitfall': 'Error comun: escribir un manifiesto que podria servir para cualquier marca. Si cambias "techwear" por "moda sostenible" en tu manifiesto y sigue funcionando, es demasiado generico. Profundiza.',
    },
    {
        'num': '05',
        'title': 'Construir tu cliente ideal (buyer persona)',
        'duration': '3 dias',
        'intro': 'Decir "mi cliente es cualquiera que le guste el streetwear" es como decir "mi cliente es cualquier humano con dinero". No es un cliente, es una masa amorfa. Necesitas una persona concreta, con nombre y cara.',
        'body': [
            'Crea una ficha de 1 pagina con tu buyer persona. Ponle un nombre inventado (ejemplo: "Iker, 22, Bilbao"). Edad concreta. Ciudad concreta (no "Espana", sino "Barcelona centro" o "periferia de Valencia"). Ingresos estimados (en Espana, un estudiante de 22 anos trabaja a tiempo parcial y tiene unos 400 a 600 euros/mes de disponible). Estudios. Hobbies (escala, skate, musica electronica, fotografia?).',
            'Y lo mas importante: dimensiones psicologicas. Que musica escucha? (Lois, Yung Beef, Rosalia, techno berlines?). Que otras marcas viste? (Carhartt, Salomon, Nike ACG, Arket?). Que redes usa y como? (TikTok 2h al dia, Instagram solo para stories, Reddit?). Que le frustra de la moda actual? (Pocas tallas para cuerpo delgado, todo carisimo, todo copiado?). Que aspira a ser dentro de 5 anos?',
            'Esta persona no tiene que ser real. Tiene que ser util. Cuando tomes una decision de marca (hago esta prenda en gris o en azul?), preguntate: que elegiria Iker? Si no lo sabes, tu persona es demasiado vaga. Vuelve a la ficha.',
        ],
        'exercise': 'Escribir como tu cliente. Durante 1 semana, antes de publicar cualquier post en Instagram, lee tu buyer persona y preguntate: Iker entenderia esto? Iker lo compartiria? Si la respuesta es no, no publiques. Mejor publicar 2 posts a la semana que conectan con Iker que 7 posts genericos para una masa anonima.',
        'pitfall': 'Error comun: crear un buyer persona que es una proyeccion idealizada de ti mismo. Tu cliente no eres tu. Tu cliente es alguien a quien quieres alcanzar. Si describes a alguien identico a ti, estas limitando tu mercado a ti y a tus clones.',
    },
    {
        'num': '06',
        'title': 'Definir tu estilo de ropa (silueta, paleta, tejido, referencia)',
        'duration': '4 a 5 dias',
        'intro': 'El estilo de tu ropa no se decide dibujando. Se decide eligiendo 4 parametros: silueta, paleta, tejido y referencia. Una vez fijos, todos tus disenos futuros son variaciones dentro de esos limites.',
        'body': [
            'Silueta: la forma exterior de la prenda cuando se lleva puesta. En techwear predominan 3 siluetas: boxy (caja, hombro caido, largo corto), oversized (largo y ancho, caida pesada), asimetrica (un lado mas largo o con cortes diagonales). Elige UNA como dominante. Si mezclas las 3, tu coleccion parecera una tienda de segunda mano.',
            'Paleta: ya decidiste en el paso de branding que sera bicromatica (B&W + 1 gris). Pero dentro de eso, decide el porcentaje. Tu marca es 80% negro, 15% blanco, 5% gris (estilo mas ninja)? O 60% blanco, 30% negro, 10% gris (mas gorpcore claro)? Este porcentaje se aplica a TODAS tus prendas.',
            'Tejido: en techwear hay 4 familias principales. Algodon pesado (300 a 480 GSM) para hoodies y tees. Ripstop (nylon cuadriculado) para pantalones y chaquetas. Softshell (3 capas, impermeable) para prendas tecnicas. Mesh (red transpirable) para capas interiores. Decide que familia sera la dominante en tu primera coleccion.',
            'Referencia: elige 3 prendas concretas (no marcas enteras) de marcas existentes que resuman lo que aspiras a hacer. Por ejemplo: "El cargo pant de Goldwin, el hoodie de Fear of God Essentials, la chaqueta de Arcteryx Veilance". Estas 3 prendas son tu benchmark. Tus disenos deben estar al nivel de esas 3.',
        ],
        'exercise': 'Cuadrante de coherencia. Dibuja un cuadrante. En cada esquina escribe uno de los 4 parametros (silueta, paleta, tejido, referencia). En el centro, escribe tu nombre de marca. Pega esta hoja en la pared de tu sitio de trabajo. Cada vez que vayas a disenar o fabricar algo, mirala. Si la prenda no respeta los 4 parametros, no la hagas.',
        'pitfall': 'Error comun: "quiero hacer algo para todos los gustos". Si disenas para todos, no disenas para nadie. Una marca fuerte dice "esto es lo que hago, lo demas te lo puedes comprar en otro sitio".',
    },
    {
        'num': '07',
        'title': 'Proceso de naming (como elegir el nombre de tu marca)',
        'duration': '4 a 5 dias',
        'intro': 'El nombre no es lo mas importante de la marca, pero es lo primero que la gente oye. Y es muy dificil de cambiar despues. Conviene hacerlo bien desde el principio.',
        'body': [
            'Genera minimo 20 opciones. Tecnicas para generar: combina dos palabras significativas (ejemplo: Black + Print = Blackprint). Inventa un neologismo corto (ejemplo: Corteiz no significa nada, suena bien). Usa un termino tecnico del nicho (Ripstop, Softshell son tomados, pero puedes buscar en glosarios). Adapta un apellido familiar. Recorta una palabra hasta hacerla irreconocible.',
            'Filtra las 20 opciones con 4 criterios. Corto: maximo 3 silabas, idealmente 2. Pronunciable en espanol e ingles (sin ene ni jota strong, sin diacrisis). Sin numeros ni guiones (escribe mal la gente al buscarlo). Disponible: @handle libre en Instagram y TikTok, y dominio .com o .es libre. De las 20, quizas 3 pasan el filtro.',
            'Prueba las 3 finalistas con 5 personas. Preguntalas: que te sugiere este nombre? Lo recordarias? Como lo escribirias para buscarlo en Google? Si la mayoria lo escribe distinto a como tu lo pronuncias, descarta. La coherencia entre pronunciacion y escritura es clave para que te encuentren.',
        ],
        'exercise': 'Test del coctel. Imagina que estas en una fiesta y alguien te pregunta "que marca tienes?". Tienes 3 segundos para decir el nombre y que la persona lo entienda, lo recuerde y sepa escribirlo. Si no pasa el test, el nombre no sirve.',
        'pitfall': 'Error comun: elegir un nombre demasiado literal ("Techwear Madrid"). Limita tu crecimiento geografico y estetico. Mejor un nombre abstracto que puedas rellenar de significado con el tiempo.',
    },
]


def build_concepto():
    story = []
    story.extend(section_header('01', 'Definicion de Marca'))
    story.append(h2('Antes de dibujar una prenda, necesitas saber quien eres.'))
    story.append(body(
        'Esta seccion es la base de todo. Si la saltas por prisa, pagaras el precio mas tarde '
        'con una marca dispersa, disenos sin coherencia y un publico que no conecta. Aqui vas a '
        'recorrer 7 pasos, de la mano, sin asumir que sabes nada. Tomate tu tiempo. Cada paso es '
        'mas importante que el siguiente.'
    ))
    story.append(spacer(6*mm))

    for s in concepto_steps:
        story.append(KeepTogether([
            Paragraph(f'{s["num"]} / PASO', styles['MonoLabel']),
            Paragraph(f'<font color="#6B6B6B">Duracion: {s["duration"]}</font>', styles['Mono']),
            Spacer(1, 4*mm),
            h2(s['title']),
            body(s['intro']),
        ]))
        for para in s['body']:
            story.append(body(para))
        if s.get('exercise'):
            story.append(spacer(2*mm))
            story.append(Paragraph('EJERCICIO PRACTICO', styles['MonoLabel']))
            story.append(body_muted(s['exercise']))
        if s.get('pitfall'):
            story.append(spacer(2*mm))
            story.append(Paragraph('AVISO', styles['MonoLabel']))
            story.append(pull(s['pitfall']))
        story.append(spacer(6*mm))
        story.append(hr())
    story.append(PageBreak())
    return story


print("Script Part 2 loaded: cover, intro, concepto.")

# ============================================================
# CONTENT - DISENO DE PRENDAS (13 modulos)
# ============================================================

modulos_diseno = [
    {
        'num': 'M1', 'level': 'Nivel 0',
        'title': 'Fundamentos: que es el diseno de moda',
        'duration': '1 semana',
        'intro': 'Antes de dibujar, necesitas entender que es el diseno de moda y que NO es. Es la diferencia entre hacer "dibujos bonitos de ropa" y disenar prendas que se puedan fabricar y llevar.',
        'body': [
            'El diseno de moda NO es dibujar prendas bonitas. Es resolver un problema: como cubrir un cuerpo humano con materiales que cumplan una funcion (abrigo, transpiracion, identidad, status) dentro de una estetica coherente. Si dibujas algo que no se puede coser, no es diseno, es ilustracion.',
            'Un disenador de moda trabaja con 4 elementos simultaneamente: la forma (silueta), el material (tejido y construccion), la funcion (para que sirve) y el significado (que comunica). Estos 4 elementos deben estar de acuerdo entre si. Si disenas un cargo pant de inspiracion militar en algodon fino y liso, el material contradice la forma y la funcion. El tejido rompe la coherencia.',
            'Para principiantes absolutos, hay 3 tipos de diseno de moda que debes conocer. Haute couture (alta costura, piezas unicas hechas a mano). Ready-to-wear (pret-a-porter, produccion en serie de calidad). Streetwear (produccion en serie, estetica urbana). Tu marca es streetwear. No intentes hacer haute couture al principio, es la trampa del ego.',
        ],
        'practical': 'Estudio de 3 prendas. Coge 3 prendas de tu armario. Para cada una, escribe en una hoja: forma (silueta general), material (tejido, peso aproximado), funcion (para que sirve), significado (que dice de quien la lleva). Veras que las 3 prendas son coherentes en sus 4 dimensiones. Esa coherencia es lo que tu debes lograr en tus disenos.',
    },
    {
        'num': 'M2', 'level': 'Nivel 10',
        'title': 'Bocetado de prendas: croquis y flats',
        'duration': '2 semanas',
        'intro': 'El bocetado tiene 2 propositos distintos: el croquis (ilustracion con figura humana, para comunicar estilo) y el flat (dibujo tecnico sin volumen, para comunicar construccion). Necesitas los dos.',
        'body': [
            'El croquis es la version "publicable" de tu diseno. Usa una figura humana estilizada (cabeza mas grande de lo real, 9 cabezas de alto en vez de las 8 reales) y dibujas la prenda encima. El objetivo es transmitir sensacion, no exactitud. Es lo que ensenas en Instagram y en tu lookbook.',
            'El flat sketch es lo opuesto: sin figura humana, sin volumen, sin sombras. Solo lineas planas que muestran construccion y costuras. Vista frontal y a veces posterior. Es lo que va dentro de tu tech pack y lo que el fabricante va a interpretar. Si el flat esta mal, la prenda fisica estara mal.',
            'Para principiantes, NO intentes dibujar la figura humana desde cero. Descarga plantillas gratuitas de croquis (busca "fashion croquis template free" en Pinterest) y dibuja sobre ellas. Te ahorra meses de frustracion. Cuando tengas mas soltura, podras crear tus propias plantillas.',
            'Herramientas para bocetar: lapices HB y 2B para bocetos rapidos. Rotuladores Pigma Micron (0.2, 0.4, 0.6) para entintar. Marcadores de tonos grises Copic para dar volumen a los flats. Papel A4 de 90gsm minimo. Tableta grafica opcional para digitalizar, NO imprescindible al principio.',
        ],
        'practical': 'Boceta 20 prendas en 5 dias. 5 prendas por dia, en croquis. Sin juzgar mientras dibujas. Las primeras 10 seran malas. Las siguientes 10 empezaran a tener personalidad. Si te bloqueas en una, pasa a la siguiente. El objetivo es volumen, no calidad al principio.',
    },
    {
        'num': 'M3', 'level': 'Nivel 20',
        'title': 'Pensar una coleccion (no prendas sueltas)',
        'duration': '1 semana',
        'intro': 'Una coleccion no es un conjunto de prendas bonitas. Es una historia coherente. Si ensenas tus 5 prendas juntas y parecen un armario aleatorio, no tienes coleccion, tienes stock.',
        'body': [
            'Una coleccion coherente tiene 3 ejes: repeticion, variacion y evolucion. Repeticion: hay elementos que aparecen en varias prendas (un tipo de costura, un color, un detalle de hardware). Variacion: cada prenda es distinta, no son 5 versiones de la misma. Evolucion: hay una progresion, una prenda lleva a la siguiente, visual o conceptualmente.',
            'Para tu primer drop, trabaja con 3 a 5 prendas hero (protagonistas). Para techwear nivel cero, recomendacion: 1 cargo pant + 1 hoodie oversized + 1 tee tecnica + 1 accesorio funcional (mochila, sterape, gorra) + 1 wild card (lo que mas te entusiasme). Mas de 5 prendas te diluira el presupuesto y la atencion.',
            'Antes de bocetar, escribe la "frase de coleccion" en una sola linea. Ejemplo: "Ropa tecnica para moverse por la ciudad de noche". Esta frase es tu filtro: cualquier prenda que no cumpla esa frase, queda fuera. Suena simple, pero te ahorrara semanas de duda.',
        ],
        'practical': 'Diagrama de coleccion. En un A3, dibuja las 5 prendas en circulo. Entre cada par de prendas adyacentes, escribe que las conecta (mismo tejido, misma paleta, mismo detalle de hardware, etc.). Si entre dos prendas no encuentras conexion, o sobra una prenda o necesitas redisenar la otra.',
    },
    {
        'num': 'M4', 'level': 'Nivel 40',
        'title': 'Tech pack: el documento que habla con el fabricante',
        'duration': '1 semana',
        'intro': 'El tech pack es el documento tecnico mas importante de tu marca. Sin un tech pack claro, el fabricante adivina. Y cuando el fabricante adivina, pierdes dinero en muestras que no coinciden con tu vision.',
        'body': [
            'Un tech pack profesional contiene 7 secciones obligatorias. 1: Flat sketch frontal y posterior (dibujo tecnico en vista plana). 2: Tabla de medidas por talla (S, M, L, XL como minimo, con medidas en cm: largo total, ancho de pecho, largo de manga, sisa, etc.). 3: Ficha de materiales (tejido principal, forro, refuerzos, con tipos y pesos GSM). 4: Ficha de hardware (cremalleras YKK, cordones, botones, velcros, con referencias).',
            '5: Ubicacion de prints o bordados (con medidas exactas en cm desde puntos de referencia como "a 5cm del cuello, centrado"). 6: Codigos de color Pantone (no HEX, el fabricante necesita Pantone para tenir el tejido). 7: Etiquetas y tags (interior, cuello, lateral, con tamano y posicion).',
            'Para tu primer tech pack, NO lo hagas desde cero. Descarga plantillas gratuitas (The Evans Group blog tiene plantillas, Hubify tambien). Adapta la plantilla a tu prenda. Un buen tech pack tarda 1 dia en hacerse. Uno malo te costara 200 euros en muestras fallidas.',
        ],
        'practical': 'Tech pack real de tu primera prenda. Elige la prenda mas sencilla de tu coleccion (probablemente la tee). Haz su tech pack completo siguiendo los 7 puntos. Mandalo a 3 fabricantes y pide presupuesto. Compararas 3 respuestas, aprenderas mucho del proceso y entenderas que informacion falta o sobra en tu tech pack.',
    },
    {
        'num': 'M5', 'level': 'Nivel 50',
        'title': 'Patronaje basico: como se construye una prenda',
        'duration': '2 semanas (teoria)',
        'intro': 'No necesitas saber patronaje para tu primer drop (puedes usar blanks o POD). Pero si necesitas entender que es, porque te hara mejor disenador y mejor comunicador con tu fabricante.',
        'body': [
            'El patronaje es el arte de crear patrones: las plantillas de papel (o digitales) con las formas que, recortadas en tejido y cosidas, construyen una prenda en 3D. Sin patron, no hay prenda. Hay 2 metodos: patronaje plano (se dibuja en 2D sobre papel usando medidas) y drapeado (se manipula el tejido directamente sobre un maniqui). El plano es mas comun para produccion industrial.',
            'Conceptos que debes conocer aunque no patronajes tu: punto de sisa (donde la manga se une al cuerpo), pinza (pliegue que da forma a la prenda, comun en camisas y pantalones), margen de costura (los cm extra que se dejan para coser, tipicamente 1cm), escalado (proceso de generar las tallas S, M, L, XL a partir del patron base, normalmente talla M).',
            'Si te decides por cut-and-sew en el futuro (no para tu primer drop), necesitaras un patronista. Puede ser freelance (50 a 150 euros por patron) o internal en tu fabrica. Tu trabajo como disenador es entregarle flats clarisimos y referencias. El patronista traduce eso a patrones.',
            'Para empezar a entender patronaje sin pagar curso, mira videos en YouTube de "patronaje basico para principiantes" en espanol. Hay canales como Moda Facil o Costura Creativa con tutoriales paso a paso. No para que patronajes tu, sino para que entiendas el vocabulario y el proceso.',
        ],
        'practical': 'Coser una tote bag desde cero. Como ejercicio de comprension, compra medio metro de tela de algodon, hilo y una aguja. Sigue un tutorial de YouTube para coser una tote bag sencilla a mano (sin maquina). Te llevara 4 horas. Cuando termines, entenderas mejor que es una costura, un margen, un dobladillo. Y valoraras el trabajo que hay detras de cada prenda.',
    },
    {
        'num': 'M6', 'level': 'Nivel 55',
        'title': 'Diseno digital en Mac: Inkscape, GIMP y Adobe Express (todo gratuito)',
        'duration': '2 semanas',
        'intro': 'Hasta aqui has trabajado a mano. Ahora toca profesionalizar: dibujar flats y tech packs en software digital. Todo el software de este modulo es gratuito y nativo para macOS en Apple Silicon (M1 a M4). No necesitas pagar suscripciones de Adobe para disenar prendas profesionales.',
        'body': [
            'Por que vectorial y no pixeles. Un flat sketch debe escalarse sin perder calidad: lo dibujas una vez y lo usas en el tech pack, en el lookbook, en Instagram, en un cartel. Los graficos vectoriales se componen de trayectorias matematicas, no de pixeles, asi que escalan infinitamente. Inkscape es el editor vectorial gratuito lider en macOS Apple Silicon. GIMP y Photopea son de pixeles: utiles para fotos y texturas, NO para flats.',
            'Inkscape en macOS Apple Silicon (M4). Inkscape es 100% gratuito y de codigo abierto. La version actual (1.3+) es nativa para Apple Silicon, asi que corre sin Rosetta y aprovecha toda la potencia del M4. Lo descargas desde inkscape.org (archivo DMG, instalacion drag-and-drop como cualquier app de Mac). Flujo de trabajo tipico: 1) Importas tu boceto a mano como referencia (capa bloqueada con opacidad al 30%). 2) Sobre ella, dibujas con la herramienta Pluma (B) los contornos planos. 3) Anades las costuras con trazo punteado. 4) Etiquetas todas las medidas. 5) Exportas en SVG, PDF y PNG.',
            'Adobe Express: la herramienta web gratuita de Adobe. Adobe Express (express.adobe.com) es la alternativa gratuita de Adobe a Canva. Funciona en el navegador, no requiere instalacion y se usa con cuenta Adobe ID gratuita. Permite crear mockups, posts para redes sociales, miniaturas y presentaciones. Incluye plantillas profesionales y acceso limitado a Adobe Fonts y Adobe Stock gratis. NO sustituye a Inkscape para flats, pero complementa para todo lo visual y de marketing.',
            'GIMP y Photopea para edicion de imagenes. GIMP es el equivalente gratuito de Photoshop, nativo para macOS Apple Silicon (descarga desde gimp.org, archivo DMG). Lo usas para editar fotos de producto, aplicar texturas a tus flats y retocar mockups. Photopea (photopea.com) es una alternativa web que abre y guarda archivos PSD de Photoshop sin instalar nada. Para tu primer drop, con Inkscape + GIMP + Adobe Express tienes cubierto el 100% del trabajo digital de diseno. Cero euros en software.',
        ],
        'practical': 'Dibuja tu primer flat digital en Inkscape. Elige la prenda mas sencilla de tu coleccion (probablemente la tee). Imprime tu boceto a mano o hazle una foto con el movil. En Inkscape, importa la imagen como referencia. Bloqueala en una capa con opacidad al 30%. Crea capa nueva encima. Con la Pluma (B), dibuja el contorno plano. Anade costuras con trazo punteado. Etiqueta medidas. Exporta en PDF y SVG. Comparalo con tu flat a mano: la diferencia sera obvia.',
    },
    {
        'num': 'M7', 'level': 'Nivel 65',
        'title': 'Diseno 3D en Mac: CLO 3D (estudiante gratis) y Blender (100% gratis)',
        'duration': '3 a 4 semanas',
        'intro': 'El software 3D es la revolucion del diseno de moda en la ultima decada. Permite simular una prenda en 3D, ver como cae el tejido, ajustar el patron en tiempo real y renderizar imagenes fotorrealistas sin coser una sola pieza. En macOS Apple Silicon (M4) tienes dos opciones potentes: CLO 3D (gratis con licencia de estudiante) y Blender (100% gratuito y libre).',
        'body': [
            'CLO 3D en Mac Apple Silicon. CLO 3D es compatible con macOS en Apple Silicon (M1 a M4). Su pagina oficial confirma compatibilidad nativa. Lo que hace: importas un patron 2D (el que hiciste en M5 o que te dio un patronista). CLO lo cose virtualmente sobre un avatar 3D. Aplicas un tejido de su biblioteca (algodon pesado, ripstop, softshell). El software simula como cae y se mueve la prenda sobre el cuerpo. Puedes cambiar el tejido, el color o el ajuste en segundos. Renderizas una imagen que parece una foto real. Todo sin producir nada fisico.',
            'Como conseguir CLO 3D gratis. Hay 3 vias. Trial gratuito de 30 dias (ideal para hacer tu coleccion entera sin pagar). Licencia de estudiante gratuita: CLO ofrece licencia gratuita para estudiantes verificados (necesitas email .edu de tu universidad o documentacion academica). Licencia profesional: aprox. 50 euros/mes o 500 euros/ano (cara pero rentable si te ahorra muestras). Para tu primer drop, el trial de 30 dias es suficiente si te organizas. Si eres estudiante, la licencia gratuita es la opcion perfecta.',
            'Blender como alternativa 100% gratuita y libre. Si no puedes acceder a CLO 3D gratis, Blender es la alternativa. Es 100% gratuito, de codigo abierto y nativo para macOS Apple Silicon (descarga desde blender.org, DMG para Mac). Blender NO esta disenado especificamente para moda, pero su motor de simulacion de telas (Cloth Simulator) es potente y gratuito. Hay tutoriales en YouTube especificos sobre como usar Blender para diseno de moda 3D. La curva de aprendizaje es mayor que CLO 3D, pero el coste es cero para siempre.',
            'Por que es revolucionario para una marca pequena. Tradicionalmente, una marca pequena necesitaba 3 rondas de muestras fisicas (200 a 400 euros por ronda) para afinar una prenda. Con CLO 3D o Blender, las 3 rondas se hacen virtualmente. Solo pides 1 muestra fisica al final, cuando el diseno esta pulido. Ahorro: 400 a 800 euros por prenda. Para una coleccion de 5 prendas, son 2.000 a 4.000 euros ahorrados. Y con la potencia del M4, los renders son rapidos: lo que en un PC antiguo tardaba 30 minutos, en un MacBook Air M4 tarda 3 a 5 minutos.',
            'Como empezar sin abrumarte. NO intentes aprender CLO 3D o Blender en 1 semana. Ambos softwares son complejos. Plan realista con CLO 3D: semana 1, mira el tutorial oficial de CLO 3D en YouTube y haz su proyecto de muestra (camiseta basica). Semana 2, importa tu primer patron real (la tee de tu coleccion). Semana 3, intenta un hoodie (mas complejo). Semana 4, renderiza y exporta imagenes para tu lookbook. Si lo haces bien, en 4 semanas tienes tu primera coleccion virtual.',
        ],
        'practical': 'Tu primera prenda en CLO 3D o Blender. Tras ver los tutoriales oficiales, coge el patron de la camiseta de tu coleccion (puedes usar uno gratuito de la biblioteca de CLO o buscar "Blender cloth simulation t-shirt" en YouTube). En 1 sesion de 4 horas, deberias tenerla cosida virtualmente, con tejido aplicado y un render basico. NO esperes perfeccion. El objetivo es entender el flujo: importar patron, coser, aplicar tejido, renderizar. La perfeccion viene despues.',
    },
    {
        'num': 'M8', 'level': 'Nivel 75',
        'title': 'Ilustracion digital a mano en Mac: Krita y Adobe Fresco (gratis)',
        'duration': '1 a 2 semanas (opcional)',
        'intro': 'Si tu flujo de trabajo es mas artistico que tecnico, la ilustracion digital a mano es la herramienta ideal para croquis, presentaciones y moodboards digitales. En macOS Apple Silicon tienes dos opciones gratuitas: Krita (100% gratis, nativo Mac) y Adobe Fresco (gratis con cuenta Adobe). Procreate NO existe para Mac (solo iPad), asi que se menciona como alternativa condicional.',
        'body': [
            'Krita en Mac Apple Silicon (M4). Krita es 100% gratuito, de codigo abierto y nativo para macOS Apple Silicon. Lo descargas desde krita.org (archivo DMG). Pinceles que imitan acuarela, rotulador, lapiz, oleo. Capas. Exportacion a PSD, PNG, PDF. Si tienes tableta grafica Wacom o similar conectada por USB a tu Mac, Krita te da pinceles profesionales sin coste. Curva de aprendizaje media: mas complejo que Procreate pero mas potente. Recomendado para ilustracion de moda en Mac.',
            'Adobe Fresco en Mac. Adobe Fresco es la app de ilustracion de Adobe, disponible para Mac, iPad y iPhone. La version gratuita incluye la mayoria de pinceles vectoriales y de pixeles, con limite de uso mensual. Funciona con cuenta Adobe ID gratuita. Descarga desde la web de Adobe o desde la Mac App Store. Fresco es mas fluido que Krita para croquis rapidos, pero la version gratuita tiene limites. Si ilustras mucho, valora pagar la version completa (10,99 euros/mes). Para empezar, Krita cubre el 100% del trabajo sin coste.',
            'Procreate: la aclaracion importante. Procreate NO existe para Mac. Es exclusivo de iPad (13 euros pago unico). Si tienes un iPad y Apple Pencil, Procreate es la herramienta mas fluida para ilustracion de moda digital. Pero si trabajas solo en Mac, no puedes usar Procreate. Krita + Adobe Fresco son tus alternativas. Esto es importante porque muchos tutoriales en YouTube asumen que tienes iPad.',
            'Cuando usar ilustracion digital vs CLO 3D vs Inkscape. Ilustracion digital (Krita o Fresco): para croquis, presentaciones artisticas, lookbook. Inkscape: para flats y tech packs tecnicos (vectorial). CLO 3D o Blender: para simulacion fotorrealista y validacion de patronaje. Los 3 se complementan, no se excluyen. Una marca profesional usa los 3 segun la fase.',
            'Flujo recomendado en Mac para tu primer drop. 1) Bocetos a mano en libreta (M2). 2) Croquis digitales en Krita o Fresco para lookbook y redes sociales (M8). 3) Flats tecnicos en Inkscape para tech packs (M6). 4) Simulacion en CLO 3D o Blender para validar patronaje antes de pedir muestra fisica (M7). 5) Muestra fisica y produccion. Todo el software es gratuito o tiene version gratuita suficiente. Cero euros en software.',
        ],
        'practical': 'Croquis digital de tu coleccion completa. Si tienes Mac y tableta grafica (Wacom Intuos S vale 60 euros), descarga Krita gratis. Dibuja los 5 croquis de tu coleccion en digital. Usa una plantilla de croquis como base (las hay gratuitas en Pinterest). Aplica los colores de tu paleta. Exporta en PNG con fondo transparente. Estos 5 croquis seran la columna visual de tu lookbook y de tu Instagram durante las 4 semanas previas al drop.',
    },
    {
        'num': 'M9', 'level': 'Nivel 60',
        'title': 'Tejidos y materiales: clasificacion y comportamiento',
        'duration': '1 semana',
        'intro': 'En streetwear, y especialmente en techwear, el tejido es la marca. Un cliente experto nota el tejido antes que el logo. Si eliges mal, todo el trabajo de diseno se cae.',
        'body': [
            'Clasificacion basica por composicion. Algodon (transpirable, comodo, pesado si es 300+ GSM). Polyester (sintetico, ligero, no transpira, barato). Nylon (sintetico, resistente, tecnica, ideal para techwear). Mezclas (algodon/polyester combina lo mejor de ambos). Lana (calor, premium, cara). Para techwear dominan algodon pesado (hoodies, tees) y nylon (pantalones, chaquetas tecnicas).',
            'Clasificacion por construccion (como se teje). Jersey (punto, elastico, tipico de camisetas). Twill (sarga, diagonal, tipico de jeans y cargos). Ripstop (cuadricula reforzada, anti-desgarros). Softshell (3 capas laminadas, impermeable y transpirable). Cada construccion comporta distinto: el jersey cede, el twill aguanta, el ripstop resiste, el softshell protege.',
            'Pesos GSM referencia: para tees streetwear busca 200 a 280 GSM. Para hoodies premium, 380 a 480 GSM. Para pantalones techwear, 200 a 350 GSM dependiendo del material. Menos de 180 GSM en cualquier prenda se siente "barato" y no encaja en techwear premium.',
            'Drapeado y caida: como se mueve el tejido sobre el cuerpo. Un tejido con buen drapeado se adapta a la forma. Uno rigido mantiene silueta. En techwear buscas rigidez estructural (cargo pant que mantenga forma) o drapeado pesado (hoodie que caiga con peso). Pregunta siempre al proveedor por el comportamiento del tejido antes de comprar.',
        ],
        'practical': 'Biblioteca de muestras de tejido. Pide muestras fisicas a 3 proveedores (ver seccion Recursos). Te cuesta 5 a 15 euros por muestra. Tocalas, lavalas, estiralas, abrsalas suavemente. Etiqueta cada una con composicion y GSM. Esta biblioteca fisica te ahorrara cientos de euros en muestras fallidas cuando llegues a produccion.',
    },
    {
        'num': 'M10', 'level': 'Nivel 70',
        'title': 'Mockups y prototipos: visualizar antes de fabricar',
        'duration': '1 semana',
        'intro': 'Nunca pidas una muestra fisica sin haberla visto antes en mockup. El mockup es tu ensayo gratis. La muestra fisica es tu ensayo de 40 euros. Salta del boceto a la muestra fisica y perderas dinero.',
        'body': [
            'Hay 3 tipos de mockup. Mockup digital sobre plantilla: subes tu diseno a un servicio como Placeit o Smartmockups y obtienes una imagen realista en una prenda. Util para redes sociales y validacion con audiencia. Mockup digital sobre foto propia: tomas foto a una prenda real tuya y aplicas el diseno en Photopea/Figma. Mas autentico pero mas trabajo.',
            'Prototipo en papel: imprimes tu diseno en papel y lo pegas a una prenda real. Cuelgas la prenda y la fotografias. Suena primitivo pero te da informacion sobre escala y ubicacion que el mockup digital no te da. Util para logos grandes en espalda.',
            'Muestra fisica (sample): solo cuando has validado los 2 anteriores. Cuesta 15 a 40 euros por pieza. Tardan 2 a 4 semanas en llegar. Pidela en talla M (la mas vendida en streetwear). Si llega mal, pides 1 revision. Si llega bien, pides produccion. Si pides mas de 2 revisiones sin mejorar, el problema es tu tech pack, no el fabricante.',
        ],
        'practical': 'Mockup coherente de las 5 prendas. Antes de pedir ninguna muestra fisica, haz mockup digital de las 5 prendas de tu coleccion. Colocalas juntas en un solo documento (Adobe Express, Figma o Inkscape, todos gratuitos en Mac). Miralas en conjunto. Parecen una coleccion o 5 prendas sueltas? Si no parecen coleccion, vuelve a bocetar antes de avanzar.',
    },
    {
        'num': 'M11', 'level': 'Nivel 80',
        'title': 'Produccion: blanks, POD o cut-and-sew',
        'duration': 'Teorico',
        'intro': 'Para tu primer drop, recomiendo blanks o POD. Cut-and-sew se reserva para cuando tienes validacion de mercado (un drop previo exitoso). Aqui te explico las 3 vias con honestidad.',
        'body': [
            'Print-on-Demand (POD): usas un proveedor como Printful o Printify. Ellos imprimen y envian solo cuando recibes un pedido. Cero stock, cero riesgo. Margen bajo (30 a 40%). Menos control de calidad. Ideal para tu primer drop si el presupuesto es muy ajustado. Inconveniente: tu base es una prenda generica, no tienes diferenciacion de tejido o fit.',
            'Blanks premium: compras prendas ya fabricadas (sin marca visible) a mayoristas como AS Colour, Comfort Colors, Bella+Canvas. Las personalizas con serigrafia, bordado o DTG mediante un impresor local. Margen medio (45 a 60%). Mas control. Tejido y fit ya decididos por el fabricante del blank. Buen balance para tu primer o segundo drop.',
            'Cut-and-sew: trabajas con un fabricante que corta tejido y cose segun tu patron. Margen alto (55 a 70%). Control total de silueta, tejido, detalles. Coste inicial alto (minimo 1000 a 2000 euros para un drop pequeno). Plazo largo (8 a 16 semanas). Solo recomendado cuando ya tienes un drop previo que vendio bien y quieres subir el nivel.',
            'Para tu primer drop: empieza con POD (si tienes menos de 500 euros) o blanks premium (si tienes 1000 a 2000 euros). NO intentes cut-and-sew al principio. Es la trampa mas comun y la mas cara. Cut-and-sew se justifica cuando tu comunidad pide algo que los blanks no pueden dar.',
        ],
        'practical': 'Calcula tu COG (Cost of Goods) antes de producir. Para cada prenda, suma: coste del blank o produccion, coste de impresion o bordado, coste de etiquetas y tags, coste de packaging (bolsa + hangtag), coste de envio desde el fabricante a ti. Multiplica el total por 2.5 a 3 para obtener el precio de venta al publico. Si el precio de venta te parece caro, tu COG es demasiado alto. Reduce costes o sube el valor percibido.',
    },
    {
        'num': 'M12', 'level': 'Nivel 90',
        'title': 'Presentacion profesional: lookbook y linea de tiempo',
        'duration': '1 semana',
        'intro': 'Una coleccion se vende cuando se presenta bien. Lookbook, fichas tecnicas y linea de tiempo de lanzamiento son las herramientas que separan una marca amateur de una profesional.',
        'body': [
            'Lookbook: documento visual (PDF o web) de 10 a 20 paginas que presenta tu coleccion en formato editorial. NO es un catalogo de producto (eso va en tu tienda). Es un documento de marca que muestra la coleccion en contexto: modelos reales, escenarios coherentes con tu universo, fotografia profesional. Mira lookbooks de Fear of God, ACRONYM, Salomon Advanced para referencia.',
            'Fichas tecnicas por prenda: 1 pagina por prenda con foto de producto sobre fondo blanco, nombre, materiales, tallas disponibles, precio, fecha de lanzamiento. Para prensa, compradores y colaboradores. NO es para el cliente final (esa info va en tu web), es para uso interno y B2B.',
            'Linea de tiempo de lanzamiento: calendario visual de las 4 semanas previas al drop y las 2 posteriores. Cuando se publican teasers, cuando se envia email a waitlist, cuando es drop day, cuando se hace follow-up. Sin esta linea, improvisas. Y la improvisacion en un lanzamiento se paga caro.',
        ],
        'practical': 'Lookbook minimo viable. Para tu primer drop, NO necesitas lookbook de 20 paginas. Con 6 a 8 basta. 1 portada con tu logo, 4 a 6 paginas con fotos de las prendas (puede ser con movil, si la luz y el fondo son correctos), 1 pagina de creditos (menciona a fotografo, modelos, colaboradores). Exporta en PDF y subelo a tu web como descarga gratuita. Refuerza credibilidad.',
    },
    {
        'num': 'M13', 'level': 'Nivel 100',
        'title': 'Iteracion y escala: del primer drop al segundo',
        'duration': 'Continuo',
        'intro': 'Tu primer drop es un experimento. Tu segundo drop es donde aplicas lo aprendido. Aqui termina la fase de principiante y empieza la de fundador real.',
        'body': [
            'Despues del primer drop, reune datos. Que prenda vendio primero, cual no se movio, que tallas faltaron, que comentarios recibiste, que devoluciones hubo y por que. Estos datos son tu hoja de ruta para el Drop 2. Si ignoras los datos y lanzas lo que te apetece, repites errores.',
            'Para el Drop 2, aplica 3 principios. Repite lo que funciono (si un color se agoto, refuerzalo). Elimina lo que no (si una prenda no se movio, no la repliques). Anade UN elemento nuevo como prueba (1 prenda nueva, 1 nuevo color, 1 nueva tecnica de impresion). NO cambies todo a la vez, no sabras que funciono.',
            'Escala con paciencia. Si tu Drop 1 vendio 50 prendas, tu Drop 2 deberia ser de 70 a 100. NO saltes a 500. El crecimiento sostenido es mejor que el boom y quiebra. Las marcas que escalan demasiado rapido se rompen por falta de cash flow o por perdida de calidad.',
            'Y recuerda: el diseno de moda es un oficio que se aprende en 10 anos, no en 10 meses. Tu primer drop sera mediocre comparado con tu decimo. Eso es normal. Lo importante es que cada drop sea mejor que el anterior. La consistencia vence al talento.',
        ],
        'practical': 'Post-mortem del Drop 1. Una semana despues del Drop 1, escribe un post-mortem de 3 paginas. Pagina 1: que fue bien (vendiste, recibiste feedback positivo, aprendiste X). Pagina 2: que fue mal (retrasos, devoluciones, quejas). Pagina 3: que cambiaras en el Drop 2. Este documento es tu activo mas valioso como fundador.',
    },
]


def build_diseno():
    story = []
    story.extend(section_header('02', 'Diseno de Prendas'))
    story.append(h2('Como se disena ropa. De 0 a 100, paso a paso.'))
    story.append(body(
        'Tu marca es de ropa. Si no sabes como se disena una prenda, no tienes marca, tienes '
        'tienda de camisetas genericas. Esta seccion es un curso en si mismo, gratuito, que te '
        'lleva desde "no se que es un croquis" hasta "se que le digo a un fabricante para producir '
        'mi segundo drop". Cada modulo tiene teoria, practica y recursos. Dedica minimo 1 semana '
        'por modulo. Si te saltas modulos, pagaras el precio mas tarde en muestras fallidas y '
        'clientes insatisfechos.'
    ))
    story.append(body(
        'Incluye bloque especifico de diseno digital en Mac (M6 a M8) con software gratuito y '
        'nativo para Apple Silicon (MacBook Air M4): Inkscape, GIMP, Krita, Blender, Adobe Express, '
        'Adobe Fresco y CLO 3D con licencia de estudiante gratuita.'
    ))
    story.append(spacer(6*mm))

    for m in modulos_diseno:
        story.append(KeepTogether([
            Paragraph(f'{m["num"]} / {m["level"].upper()}', styles['MonoLabel']),
            Paragraph(f'<font color="#6B6B6B">Duracion: {m["duration"]}</font>', styles['Mono']),
            Spacer(1, 3*mm),
            h2(m['title']),
            body(m['intro']),
        ]))
        for para in m['body']:
            story.append(body(para))
        if m.get('practical'):
            story.append(spacer(2*mm))
            story.append(Paragraph('PRACTICA OBLIGATORIA', styles['MonoLabel']))
            story.append(body_muted(m['practical']))
        story.append(spacer(6*mm))
        story.append(hr())
    story.append(PageBreak())
    return story


print("Script Part 3 loaded: diseno de prendas (13 modulos).")

# ============================================================
# CONTENT - ROADMAP (5 fases, 64 tareas)
# ============================================================

fases_roadmap = [
    {
        'num': '01', 'title': 'Concepto y Definicion',
        'months': 'Mes 1', 'duration': '~4 semanas',
        'goal': 'Definir quien eres como marca, que defiendes y para quien disenar, antes de tocar cualquier herramienta.',
        'tasks': [
            ('1-1', 'Escribir autocuestionario de 20 preguntas sobre ti', 'Preguntas: que ropa uso cada dia? que marcas admiro y por que? que odio de la moda actual? que subculturas me influyen? que musica escucho? que peliculas? que barrios o ciudades? Sin filtros, en una libreta.', 2),
            ('1-2', 'Construir 3 moodboards separados en Pinterest', 'Tableros: Siluetas y prendas, Paletas y texturas, Fotografia y actitud. Minimo 30 pins por tablero. NO mezcles estilos. Si pinneas algo que no encaja con el resto, descartalo.', 4),
            ('1-3', 'Aplicar tecnica de los 5 Por Ques a tu idea de marca', 'Escribe "Quiero crear una marca de ropa". Preguntate "por que" 5 veces seguidas. Cada respuesta profundiza. Al final llegaras a algo honesto.', 1),
            ('1-4', 'Estudiar 5 marcas referentes techwear en profundidad', 'Acronym, Goldwin, Arcteryx Veilance, Salomon Advanced, Stone Island Shadow Project. Por cada una, anota: silueta, paleta, materiales, narrativa de marca, cliente ideal. Una pagina por marca.', 5),
            ('1-5', 'Escribir manifiesto de marca (1 pagina, 3 parrafos)', 'Parrafo 1: que defiendes. Parrafo 2: contra que te rebelas. Parrafo 3: que tipo de vida quieres que tu cliente viva con tu ropa. Sin eslogans. Sin marketing. Lenguaje honesto.', 3),
            ('1-6', 'Definir tu cliente ideal (buyer persona) en 1 pagina', 'Nombre inventado, edad, ciudad, barrio, ingresos, estudios, hobbies, que musica escucha, que otras marcas viste, que redes usa, que le frustra, que aspira a ser. Cuanto mas concreto, mejor.', 3),
            ('1-7', 'Elegir UN nicho techwear especifico', 'Opciones: utilitario cyberpunk, gorpcore, ninja-style, mil-tech. NO mezcles al principio. Un nicho claro facilita todas las decisiones posteriores.', 1),
            ('1-8', 'Bocetar 10 ideas de nombre de marca en libreta', 'Corto, pronunciable en espanol e ingles, sin numeros ni guiones. Tecnicas: combinar dos palabras, inventar neologismo, usar un termino tecnico. Verifica disponibilidad de @handle en IG y TikTok.', 4),
            ('1-9', 'Verificar disponibilidad y reservar dominio .com (o .es)', 'Usa Namecheap o Cloudflare Registrar (unos 10 euros/ano). Evita GoDaddy por el precio de renovacion. Si el .com no esta libre, prueba .es, .store o .co.', 1),
            ('1-10', 'Reservar @handles en Instagram, TikTok, Pinterest, X, YouTube', 'Mismo nombre en todas. Coherencia equivale a credibilidad. Si el nombre exacto no esta libre en alguna, anade un prefijo como "shop" o sufijo como "official".', 1),
            ('1-11', 'Definir paleta bicromatica (negro, blanco, 1 gris)', 'Herramienta: coolors.co. Ejemplo techwear: #0A0A0A (negro puro) + #F5F5F5 (blanco off) + #6B6B6B (grafito). Anota codigos HEX y los Pantone equivalentes.', 2),
            ('1-12', 'Elegir 2 tipografias (display + body)', 'Google Fonts gratis. Techwear clasico: Space Grotesk + Inter, o JetBrains Mono + Inter. La display para titulares, la body para texto largo. Maximo 2 familias.', 2),
            ('1-13', 'Bocetar 20 variaciones de logo a mano (papel y lapiz)', 'Techwear equivale a formas geometricas, mono-line, sin adornos. NO uses color. Explora: wordmark (solo texto), lettermark (iniciales), monograma (simbolo + texto). 20 minimas.', 5),
            ('1-14', 'Digitalizar logo en Figma (version final en SVG)', 'Crea cuenta gratuita en figma.com. Reproduce tu mejor boceto con la herramienta Pen (tecla P). Exporta en SVG (vectorial, escalable sin perder calidad).', 5),
            ('1-15', 'Crear Brand Kit de 1 pagina (PDF) y guardarlo como Biblia', 'En Figma: junta logo, paleta con codigos HEX, tipografias, reglas de uso correcto e incorrecto. Este documento es la Biblia visual de tu marca.', 3),
            ('1-16', 'Compartir Brand Kit con 3 personas de confianza y pedir feedback honesto', 'Pregunta: que transmite esta marca? Para quien crees que es? Si las respuestas no coinciden con tu intencion, vuelve a pasos anteriores. NO ignores el feedback.', 3),
        ],
    },
    {
        'num': '02', 'title': 'Diseno de Prendas',
        'months': 'Mes 2', 'duration': '~4 semanas',
        'goal': 'Aprender los fundamentos del diseno de moda y bocetar tu primera coleccion de 3 a 5 prendas hero.',
        'tasks': [
            ('2-1', 'Auditar curso Fashion as Design del MoMA (Coursera, gratis)', 'Modo auditor (sin certificado). Son 7 modulos de unos 4h. Haz 1 modulo por dia. Te dara contexto cultural e historico del diseno de moda.', 7),
            ('2-2', 'Ver 5 videos de Zoe Hong sobre fashion illustration', 'Su playlist Fashion Illustration for Beginners es la mejor en ingles. Toma apuntes del proceso: como dibuja la figura, como coloca la prenda encima.', 3),
            ('2-3', 'Descargar 3 plantillas de croquis (figura humana) gratis', 'Busca "fashion croquis template free" en Pinterest. Elige 3 estilos diferentes. Imprimelas en A4. Te serviran de base para bocetar tus prendas sin tener que dibujar la figura desde cero.', 1),
            ('2-4', 'Bocetar 20 prendas en papel usando croquis como base', 'No juzgues mientras dibujas. 20 ideas, minimas. 5 hoodies, 5 tees, 5 pantalones, 5 accesorios. Usa rotuladores Pigma Micron para los trazos finales.', 5),
            ('2-5', 'Seleccionar 5 prendas hero (tu primera coleccion)', 'Para techwear nivel cero: 1 cargo pant + 1 hoodie oversized + 1 tee tecnica + 1 accessorio (mochila o sterape) + 1 wild card. Criterio: que las 5 formen un universo visual coherente.', 2),
            ('2-6', 'Dibujar flat sketch (vista frontal tecnica) de cada prenda', 'Sin volumen ni sombras. Solo construccion y costuras. Estilo plano. Esto sera la base de tu tech pack. Usa regla y compas para lineas rectas.', 4),
            ('2-7', 'Estudiar tipos de tejido para techwear (1 tarde)', 'Aprende la diferencia: algodon peinado vs cardado, ripstop, cordura, softshell, nylon balistico. Mira videos de Justine Leconte sobre tejidos. Anota que tejido corresponde a cada una de tus 5 prendas.', 2),
            ('2-8', 'Crear ficha de materiales por prenda (1 pagina por prenda)', 'Para cada una de las 5: tejido principal, GSM (peso), color Pantone, tejido secundario (forro, refuerzos), hardware (cremalleras, cordones), etiquetas.', 4),
            ('2-9', 'Construir tech pack completo de cada prenda (plantilla gratuita)', 'Usa plantilla gratuita de Hubify o de The Evans Group blog. Incluye: flat sketch frontal y posterior, tabla de medidas, ficha de materiales, ubicacion de prints o bordados con medidas.', 5),
            ('2-10', 'Crear mockups digitales de las 5 prendas en Placeit o Smartmockups', 'Sube tus disenos a plantillas de hoodie, tee y pant. NO pidas muestras fisicas todavia. El objetivo es ver como se verian y poder ensenarlas.', 3),
            ('2-11', 'Presentar la coleccion a 3 personas de confianza y pedir feedback especifico', 'Preguntas: cual te comprarias? Por que? Que prenda sobra? Que echas en falta? Anota TODO. No te defiendas de la critica.', 3),
            ('2-12', 'Iterar disenos segun feedback y bloquear coleccion final', 'Maximo 2 cambios por prenda. Despues de este paso, la coleccion queda CONGELADA. Cualquier cambio posterior debe esperar al Drop 2.', 4),
        ],
    },
    {
        'num': '03', 'title': 'Marca y Web',
        'months': 'Mes 3', 'duration': '~4 semanas',
        'goal': 'Materializar la marca en una tienda Shopify Coming Soon que capture emails y muestre tu universo visual.',
        'tasks': [
            ('3-1', 'Ver curso de Shopify en espanol (Udemy) completo', 'Inscribete en el curso de Shopify en espanol de la seccion de cursos. Hazlo en 1 semana, a razon de 1h diaria. Toma apuntes solo de lo que no entiendas.', 7),
            ('3-2', 'Tomar curso de Diseno de Identidad para Marcas (Domestika)', 'Refuerza y profesionaliza lo que aprendiste en la Fase 1 sobre branding. Curso de 18 unidades, ofertado a 11,99 euros. Haz el proyecto final con tu propia marca.', 7),
            ('3-3', 'Disenar wireframe (esqueleto) de tu web en Figma', 'Paginas: Home, Coming Soon, About, Contacto. Manten todo minimalista: mucho espacio en blanco, fotos grandes, poco texto. Una pagina por pantalla.', 4),
            ('3-4', 'Crear cuenta en Shopify (1 euro/mes durante 3 meses)', 'Trial de 3 dias, luego 1 euro/mes los primeros 3 meses. NO elijas plan completo hasta tener ventas. Tarjeta de credito necesaria para el alta.', 1),
            ('3-5', 'Elegir theme minimalista gratuito', 'Recomendado: Dawn o Sense (ambos gratis). Busca themes con poco texto, imagen grande y navegacion simple. Evita themes con muchos colores por defecto.', 2),
            ('3-6', 'Subir logo, paleta y tipografias al theme', 'Shopify > Online Store > Themes > Customize. Reemplaza el logo default, ajusta colores a B&W (negro #0A0A0A, blanco #F5F5F5, gris #6B6B6B).', 3),
            ('3-7', 'Configurar pagina Coming Soon con captura de email', 'Usa la app gratuita Shopify Email o embed un formulario de Mailchimp. Mensaje: "Proximamente. Unete a la lista VIP para acceso prioritario al primer drop."', 3),
            ('3-8', 'Conectar dominio propio a Shopify', 'Shopify > Settings > Domains > Connect existing domain. Tarda 24 a 48h en propagar. Mientras tanto, Shopify te da un dominio temporal .myshopify.com.', 1),
            ('3-9', 'Configurar Shopify Payments (o Stripe como alternativa)', 'Necesitaras DNI y cuenta bancaria espanola. Sin esto no puedes cobrar. Verificacion: 2 a 5 dias habiles. Hazlo cuanto antes para no bloquear el lanzamiento.', 3),
            ('3-10', 'Crear 3 paginas legales obligatorias', 'Aviso legal, Politica de privacidad, Politica de cookies. Usa plantillas gratuitas de Aviso Legal Web adaptadas a Espana. Imprescindible para cumplir RGPD.', 2),
            ('3-11', 'Configurar mail profesional (hola@tumarca.com)', 'Opcion gratuita: Zoho Mail (1 cuenta gratis). Opcion de pago: Google Workspace (6 euros/mes). NO uses gmail.com para contactos de marca, da mala imagen.', 2),
            ('3-12', 'Hacer test completo de la web en movil y desktop', 'Pide a 3 personas de confianza que entren desde su movil y te cuenten: entienden que vendes en 5 segundos? Encuentran el formulario de email? Corrige antes de seguir.', 2),
        ],
    },
    {
        'num': '04', 'title': 'Comunidad y Contenido',
        'months': 'Mes 4 y 5', 'duration': '~6 semanas',
        'goal': 'Construir una audiencia real alrededor de la marca ANTES de tener producto fisico.',
        'tasks': [
            ('4-1', 'Optimizar perfiles sociales (bio coherente + link en bio)', 'Misma bio en IG, TikTok y Pinterest. Link: tu tienda Shopify. Herramienta gratuita para link en bio: Linktree. Foto de perfil: tu logo en B&W.', 2),
            ('4-2', 'Disenar grid coherente de 9 posts en Instagram', 'Alterna: mockups, inspiracion techwear, proceso creativo, tipografia. Paleta B&W en TODO. Programa los 9 primeros posts antes de empezar a publicar para tener base visual.', 5),
            ('4-3', 'Grabar 5 videos verticales (TikTok o Reels) de proceso', 'Bocetando en libreta, digitalizando en Figma, eligiendo tejidos, etc. Camara del movil basta. Edita en CapCut (gratis). Maximo 30 segundos por video.', 5),
            ('4-4', 'Documentar tu proceso en Stories diariamente', 'Sube 3 a 5 stories al dia. La gente sigue personas, no logos. Se transparente sobre tu aprendizaje. Cuenta los dias que fallas tambien, conecta mas.', 30),
            ('4-5', 'Identificar 15 micro-creadores techwear (1k a 10k seguidores)', 'Busqueda IG: #techwear, #techwearspain, #gorpcore. Anota su @ y engagement. NO pidas nada todavia. Solo observa que contenido les funciona.', 4),
            ('4-6', 'Empezar a interactuar con esos 15 creadores (genuinamente)', 'Comenta sus posts con opiniones reales (no pongas "fuego, fuego, fuego"). Comparte su contenido. Construye relacion antes de pedir nada.', 14),
            ('4-7', 'Crear servidor de Discord para tu comunidad', 'Canales: general, inspiracion, behind-the-scenes, sugerencias. Invita a los 10 primeros seguidores mas activos. Reglas claras y moderacion desde el dia 1.', 2),
            ('4-8', 'Configurar Mailchimp gratis (hasta 500 contactos)', 'Importa los emails capturados en Shopify. Crea secuencia de 3 emails de bienvenida automatizada. Email 1: gracias. Email 2: historia de la marca. Email 3: sneak peek de la coleccion.', 3),
            ('4-9', 'Publicar 3 posts en r/streetwearstartup (Reddit)', 'Comparte tu proceso, pide feedback honesto. La comunidad Reddit es brutal pero util. Respeta las reglas del subreddit. NO hagas spam.', 7),
            ('4-10', 'Definir fecha de lanzamiento (Drop Day)', 'Marca un dia concreto en el calendario, por ejemplo: "Sabado 17 de enero, 18:00h CET". Comprometete publicamente. La presion social te ayudara a cumplir.', 1),
            ('4-11', 'Disenar teasers visuales (cuenta atras + mockups)', 'Crea 5 imagenes de teaser con los mockups de tu coleccion y cuenta atras (28 dias, 21 dias, 14 dias, 7 dias, 1 dia). Programa en todas las redes.', 3),
            ('4-12', 'Lanzar campana de teaser en stories y Reels (2 semanas)', 'Cuenta atras diaria en stories. Publica 1 Reel cada 3 dias mostrando un detalle de la coleccion. Refuerza el misterio, no ensenes todo.', 14),
        ],
    },
    {
        'num': '05', 'title': 'Pre-Launch y Drop',
        'months': 'Mes 6', 'duration': '~4 semanas',
        'goal': 'Lanzar el primer drop de 3 a 5 prendas con una comunidad ya calentada y un proceso de compra impecable.',
        'tasks': [
            ('5-1', 'Decidir via de produccion: POD, blanks o cut-and-sew', 'Nivel cero recomendado: POD con Printful (validacion barata) o blanks premium (AS Colour, Comfort Colors) con serigrafia o bordado local. Cut-and-sew se reserva para Drop 2.', 2),
            ('5-2', 'Pedir muestras (1 por prenda, en talla M)', 'Si POD: pide a tu propia direccion. Si blanks: pide al impresor local. Coste: 15 a 40 euros por pieza. NO avances a produccion sin ver y tocar la muestra.', 14),
            ('5-3', 'Fotografiar producto (movil + luz natural + fondo blanco)', 'Ventana grande + pared blanca. Edita en Lightroom Mobile (gratis). Minimo 5 fotos por prenda: frontal, lateral, detalle, etiqueta, contexto lifestyle.', 3),
            ('5-4', 'Subir productos a Shopify (titulo, descripcion, fotos, precio)', 'Precio techwear: coste x 2.5 a 3. NO seas barato. La primera coleccion debe ser sostenible, no quiero venderlo todo. Descripciones cortas, enfocadas en material y fit.', 3),
            ('5-5', 'Configurar envios y politicas de devolucion', 'Shopify > Settings > Shipping. Para Espana: 4 a 6 euros envio nacional, gratis a partir de 80 euros. Devoluciones: 14 dias segun ley europea. Documenta todo en pagina de FAQ.', 2),
            ('5-6', 'Email a waitlist 7 dias antes del drop', 'Asunto: "7 dias. Acceso VIP 24h antes." Crea sentido de exclusividad real. Anade 2 fotos de producto. Boton claro a la pagina de producto o a la home.', 1),
            ('5-7', 'Email a waitlist 1 dia antes (acceso VIP real)', 'Dales acceso 24h antes que al publico general. Refuerza el sentimiento de comunidad. Crea un codigo de descuento exclusivo o acceso anticipado con contrasena.', 1),
            ('5-8', 'DROP DAY: activar tienda y publicar en todas las redes', 'Publica a la hora exacta anunciada. Story en IG, post feed, Reel, TikTok, email a lista. Haz live si te atreves. Tienes maxima visibilidad las primeras 6h.', 1),
            ('5-9', 'Atender mensajes y DMs en tiempo real (primeras 48h)', 'Responde a TODO en menos de 2h las primeras 48h. La atencion al cliente en el lanzamiento crea o rompe la reputacion de la marca para siempre.', 2),
            ('5-10', 'Recoger feedback post-compra (encuesta + DMs)', 'Pregunta: que te gusto? que mejorarias? que prenda echas en falta? Escucha, no te defiendas. Las criticas son oro para el Drop 2.', 7),
            ('5-11', 'Analizar metricas: ventas, visitas, conversion, devoluciones', 'Shopify Analytics. Metrica clave: tasa de conversion. Punto de referencia para nivel cero: 1 a 2%. Anota que producto vendio primero y cual no se movio.', 3),
            ('5-12', 'Planificar Drop 2 basandote en lo aprendido', 'Repite lo que funciono. Elimina lo que no. NO anadas prendas nuevas por inercia. Manten foco. Drop 2 debe ser una version mejorada del 1, no una coleccion nueva.', 5),
        ],
    },
]


def build_roadmap():
    story = []
    story.extend(section_header('03', 'Roadmap Visual'))
    story.append(h2('5 fases. 6 meses. 64 tareas.'))
    story.append(body(
        'Marca cada tarea cuando la termines, no antes. La honestidad con uno mismo es la '
        'primera disciplina de un fundador. Antes de empezar el roadmap, recomendamos pasar por '
        'las secciones Concepto y Diseno para tener contexto.'
    ))
    story.append(spacer(4*mm))
    story.append(Paragraph('PROGRESO TOTAL: 00 / 64 (0%)', styles['MonoLabel']))
    story.append(spacer(8*mm))

    for fase in fases_roadmap:
        story.append(KeepTogether([
            Paragraph(f'FASE {fase["num"]}', styles['MonoLabel']),
            h2(fase['title']),
            Paragraph(f'<font color="#6B6B6B">{fase["months"]} - {fase["duration"]}</font>', styles['Mono']),
            Spacer(1, 3*mm),
            body(fase['goal']),
        ]))
        story.append(spacer(2*mm))
        # Tasks table
        task_data = [['#', 'TAREA', 'DUR.', 'HECHO']]
        for tid, label, hint, days in fase['tasks']:
            task_data.append([tid, label, f'~{days}d', '[  ]'])
        t = Table(task_data, colWidths=[14*mm, 110*mm, 16*mm, 22*mm], repeatRows=1)
        t.setStyle(TableStyle([
            ('FONTNAME', (0,0), (-1,0), 'Mono-Bold'),
            ('FONTNAME', (0,1), (-1,-1), 'Body'),
            ('FONTSIZE', (0,0), (-1,0), 7),
            ('FONTSIZE', (0,1), (-1,-1), 9),
            ('TEXTCOLOR', (0,0), (-1,0), C_FG),
            ('TEXTCOLOR', (0,1), (-1,-1), C_FG),
            ('BACKGROUND', (0,0), (-1,0), C_BG_MID),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('TOPPADDING', (0,0), (-1,-1), 5),
            ('BOTTOMPADDING', (0,0), (-1,-1), 5),
            ('LEFTPADDING', (0,0), (-1,-1), 5),
            ('RIGHTPADDING', (0,0), (-1,-1), 5),
            ('FONTNAME', (0,1), (0,-1), 'Mono'),
            ('FONTSIZE', (0,1), (0,-1), 7),
            ('TEXTCOLOR', (0,1), (0,-1), C_MUTED),
            ('FONTNAME', (2,1), (2,-1), 'Mono'),
            ('FONTSIZE', (2,1), (2,-1), 7),
            ('TEXTCOLOR', (2,1), (2,-1), C_MUTED),
            ('FONTNAME', (3,1), (3,-1), 'Mono'),
            ('FONTSIZE', (3,1), (3,-1), 10),
            ('ALIGN', (3,0), (3,-1), 'CENTER'),
            ('TEXTCOLOR', (3,1), (3,-1), C_FG),
            ('GRID', (0,0), (-1,-1), 0.3, C_BORDER),
        ]))
        story.append(t)
        # Hints
        story.append(spacer(3*mm))
        story.append(Paragraph('PISTAS PARA CADA TAREA:', styles['MonoLabel']))
        for tid, label, hint, days in fase['tasks']:
            story.append(Paragraph(f'<b>{tid}.</b> {hint}', styles['BodyMuted']))
        story.append(spacer(8*mm))
        story.append(hr())
    story.append(PageBreak())
    return story


print("Script Part 4 loaded: roadmap (5 fases, 64 tareas).")

# ============================================================
# CONTENT - CURSOS
# ============================================================

def build_cursos():
    story = []
    story.extend(section_header('04', 'Cursos de Pago y Gratuitos'))
    story.append(h2('Dos cursos. Menos de 50 euros.'))
    story.append(body(
        'Suficiente para cubrir las dos areas donde mas te jugaras el cuello: identidad de '
        'marca y tienda online. No compres mas: el resto lo aprenderas gratis en YouTube y '
        'practicando. Para diseno de prendas y software digital, mira los cursos especificos '
        'mas abajo.'
    ))
    story.append(spacer(6*mm))

    # Cursos principales (2 pago + bonus gratis)
    story.append(Paragraph('CURSOS PRINCIPALES DE PAGO', styles['MonoLabel']))
    story.append(spacer(2*mm))
    cursos_principales = [
        ['01', 'Diseno de Identidad para Marcas', 'Domestika', '11,99 eur', '59,99 eur',
         'Curso de branding completo que te ensena a construir una identidad visual de marca desde cero (logo, paleta, tipografia, manual de marca). Imprescindible para tu Fase de Concepto.'],
        ['02', 'Shopify desde Cero: Crea tu Tienda Online en Espanol', 'Udemy', '12,99 eur', '79,99 eur',
         'Configuracion completa de Shopify en espanol: registro, theme, productos, pagos, envios, dominio y primera venta. Cubre tu Fase de Marca y Web. Verifica que el curso este en espanol antes de comprar.'],
    ]
    for c in cursos_principales:
        story.append(KeepTogether([
            Paragraph(f'{c[0]} / {c[2].upper()}', styles['MonoLabel']),
            h3(c[1]),
            Paragraph(f'<font color="#6B6B6B">Precio oferta: {c[3]} (antes {c[4]})</font>', styles['Mono']),
            body(c[5]),
        ]))
        story.append(hr(0.3, C_BORDER, 3*mm))

    # Total
    story.append(spacer(4*mm))
    story.append(Paragraph(
        '<b>INVERSION TOTAL CURSOS PRINCIPALES: 24,98 euros</b> (de 50 euros de tope). Ahorras 25,02 euros.',
        styles['Body']
    ))
    story.append(spacer(6*mm))

    # Curso bonus
    story.append(Paragraph('CURSO BONUS (SUSTITUYE AL QUE DABA ERROR 404)', styles['MonoLabel']))
    story.append(spacer(2*mm))
    story.append(h3('Fashion as Design (MoMA, en Coursera)'))
    story.append(Paragraph('<font color="#6B6B6B">Plataforma: Coursera - Modalidad: Audit gratis (sin certificado) - Duracion: 7 modulos, aprox. 27h</font>', styles['Mono']))
    story.append(body(
        'Curso del Museo de Arte Moderno de Nueva York (MoMA) sobre diseno de moda como '
        'disciplina. Gratis en modo "auditor" (sin certificado). Te da contexto cultural, '
        'historico y de oficio antes de ponerte a dibujar prendas. Imprescindible para tu '
        'Fase de Diseno de Prendas. Compatible con tu presupuesto de 50 euros porque es 0 euros.'
    ))
    story.append(spacer(8*mm))

    # Cursos diseño de prendas
    story.append(Paragraph('CURSOS PARA DISENO DE PRENDAS', styles['MonoLabel']))
    story.append(spacer(2*mm))
    cursos_prendas = [
        ['Fashion as Design (MoMA, Coursera)', 'Coursera', '0 eur', 'Audit gratis',
         'El mejor punto de partida gratuito para entender que es el diseno de moda mas alla del dibujo. Te da ojos de disenador.'],
        ['Patronaje y Costura Basica (playlist gratuita en YouTube)', 'YouTube', '0 eur', 'Gratis',
         'Aprende como se construye una prenda desde el patron hasta la costura. Sin este conocimiento, tus disenos seran bonitos en papel pero infabricables.'],
        ['Diseno de Coleccion de Moda (Domestika, opcional)', 'Domestika', '11,99 eur', 'Pago',
         'Si te sobra presupuesto, te ensena a pensar una coleccion de 3 a 5 prendas como una historia coherente. Util para que tu primer drop no parezca un armario random.'],
    ]
    for c in cursos_prendas:
        story.append(KeepTogether([
            h3(c[0]),
            Paragraph(f'<font color="#6B6B6B">{c[1]} - Precio: {c[2]} ({c[3]})</font>', styles['Mono']),
            body(c[4]),
        ]))
        story.append(hr(0.3, C_BORDER, 3*mm))

    story.append(spacer(6*mm))
    # Cursos digitales Mac
    story.append(Paragraph('CURSOS PARA DISENO DIGITAL EN MAC (SOFTWARE GRATUITO)', styles['MonoLabel']))
    story.append(spacer(2*mm))
    story.append(body(
        'Estos cursos cubren las herramientas clave del diseno digital de moda en macOS Apple '
        'Silicon: Inkscape (vectorial gratis), Blender (3D gratis), Krita (ilustracion gratis), '
        'Adobe Express (web gratis), Adobe Fresco (ilustracion gratis) y CLO 3D (trial y '
        'estudiante gratis). TODOS son gratuitos o tienen version gratuita suficiente. Cero '
        'euros en software para tu MacBook Air M4.'
    ))
    story.append(spacer(2*mm))
    cursos_digitales = [
        ['Adobe Express: cursos gratuitos oficiales de Adobe', 'YouTube', '0 eur',
         'Adobe Express es la herramienta web gratuita de Adobe (alternativa a Canva). Adobe ofrece tutoriales oficiales 100% gratuitos en su canal de YouTube para crear mockups, posts y presentaciones de marca. Sin coste, sin trial, sin tarjeta.'],
        ['Inkscape para diseno de moda (YouTube, gratis)', 'YouTube', '0 eur',
         'Inkscape es el editor vectorial gratuito lider en macOS Apple Silicon. Aprenderlo te permite crear flats y tech packs profesionales sin pagar Adobe Illustrator. Compatible con MacBook Air M4 nativo.'],
        ['Adobe Fresco: ilustracion digital gratuita en Mac (oficial Adobe)', 'YouTube', '0 eur',
         'Adobe Fresco es la app de ilustracion de Adobe, gratis con cuenta Adobe ID. Funciona en Mac Apple Silicon. Tutoriales oficiales de Adobe te ensenan desde configurar pinceles hasta exportar ilustraciones para tu lookbook.'],
        ['CLO 3D para principiantes (playlist gratuita en YouTube)', 'YouTube', '0 eur',
         'CLO 3D es el software lider de diseno de moda en 3D. Compatible con macOS Apple Silicon. Existe trial de 30 dias y licencia de estudiante gratuita (verificada con email .edu).'],
        ['Blender para diseno de moda 3D (YouTube, 100% gratis)', 'YouTube', '0 eur',
         'Blender es 100% gratuito y nativo para macOS Apple Silicon. Su motor de simulacion de telas (Cloth Simulator) es potente. Alternativa libre a CLO 3D si no tienes licencia de estudiante.'],
        ['Krita para ilustracion de moda (YouTube, gratis)', 'YouTube', '0 eur',
         'Krita es 100% gratuito y nativo para macOS Apple Silicon. Con tableta grafica conectada a tu Mac, sustituye a Procreate (que solo existe en iPad).'],
        ['Adobe Creative Cloud para principiantes (Adobe Education, gratis)', 'Coursera', '0 eur',
         'Curso gratuito de Adobe Education sobre las herramientas gratuitas de Creative Cloud: Adobe Color, Adobe Fonts, Adobe Express, Adobe Fresco, Adobe Portfolio. Auditable gratis en Coursera.'],
        ['GIMP para edicion de imagenes (YouTube, gratis)', 'YouTube', '0 eur',
         'GIMP es el equivalente gratuito de Photoshop, nativo para macOS Apple Silicon. Lo usas para editar fotos de producto, aplicar texturas y retocar mockups.'],
    ]
    for c in cursos_digitales:
        story.append(KeepTogether([
            h3(c[0]),
            Paragraph(f'<font color="#6B6B6B">{c[1]} - Precio: {c[2]} (Audit gratis)</font>', styles['Mono']),
            body(c[3]),
        ]))
        story.append(hr(0.3, C_BORDER, 3*mm))

    story.append(spacer(6*mm))
    story.append(pull(
        '"Sobre el orden recomendado para Mac: si solo puedes elegir 2 cursos, empieza por el '
        'de Adobe Express (web gratis, para mockups y redes) y el de Inkscape (vectorial gratis, '
        'para flats y tech packs). Si quieres diseno 3D, anade CLO 3D (trial 30 dias) o Blender '
        '(100% gratis para siempre). Total gastado en software de diseno: 0 euros."'
    ))
    story.append(PageBreak())
    return story


# ============================================================
# CONTENT - RECURSOS GRATUITOS
# ============================================================

recursos_categorias = [
    ('YouTube - Branding y Diseno Grafico', [
        ('CharliMarieTV', 'Disenadora de marca que documenta su proceso real, con sus dudas y errores.'),
        ('The Futur', 'Canal de branding y diseno profesional con playlists sobre Logo Design y Brand Identity.'),
        ('Roberto Blake', 'Diseno grafico y branding para emprendedores. Estilo directo, en ingles, ideal para nivel cero.'),
        ('Sebastian Esqueda', 'Diseno y branding en espanol. Tutoriales de Figma e Illustrator ideales para hispanohablantes.'),
        ('Wholesale Ted', 'E-commerce y Shopify para principiantes. Sarah explica dropshipping y POD sin humo.'),
        ('Printful', 'Canal oficial de Printful con tutoriales sobre print-on-demand, mockups y Shopify.'),
    ]),
    ('YouTube - Diseno de Moda', [
        ('Zoe Hong', 'La referencia en ingles para disenadores de moda principiantes. Playlists de fashion illustration, tech packs y collection development.'),
        ('Justine Leconte', 'Disenadora francesa que explica tejidos, patronaje y construccion de prendas con rigor.'),
        ('Kestin Goar', 'Disenadora que documenta el proceso de crear una marca de moda desde dentro. Realista, sin humo.'),
        ('Sartorial Talks', 'Conversaciones profundas sobre estilo, tejidos y construccion. Mas cultural que tecnico.'),
        ('Timothy Westbrook', 'Disenador sostenible que ensena bocetado de moda, manejo de tejidos y pensamiento de coleccion.'),
    ]),
    ('Herramientas de Diseno', [
        ('Figma', 'Estandar de la industria para branding y diseno web. Gratis hasta 3 proyectos.'),
        ('Photopea', 'Clon gratuito de Photoshop que funciona en el navegador. Edicion de imagenes sin instalar nada.'),
        ('Canva', 'Plantillas rapidas para stories, posts y miniaturas. Util pero NO para el logo principal (usa Figma).'),
        ('GIMP', 'Alternativa gratuita y de codigo abierto a Photoshop. Nativo para macOS Apple Silicon.'),
        ('Inkscape', 'Editor vectorial libre. Alternativa a Illustrator. Nativo para macOS Apple Silicon.'),
        ('Krita', 'Software gratuito de ilustracion digital. Ideal para bocetar prendas a mano alzada con tableta grafica.'),
        ('Placeit', 'Mockups de ropa y escenarios realistas. Plan gratuito limitado.'),
        ('Smartmockups', 'Mockups gratuitos integrados con Adobe (cuenta Adobe ID gratuita).'),
    ]),
    ('Software Digital de Moda (macOS Apple Silicon M4)', [
        ('Inkscape (gratis, nativo Mac M4)', 'Editor vectorial gratuito lider en macOS Apple Silicon. Alternativa libre a Adobe Illustrator. Tu herramienta principal para flats y tech packs.'),
        ('GIMP (gratis, nativo Mac M4)', 'Equivalente gratuito de Photoshop, nativo para Apple Silicon. Edicion de fotos de producto, texturas y mockups.'),
        ('Krita (gratis, nativo Mac M4)', 'Software libre de ilustracion digital. Con tableta grafica USB, sustituye a Procreate (que solo existe en iPad).'),
        ('Blender (100% gratis, nativo Mac M4)', 'Software 3D libre y potente. Su Cloth Simulator permite simular telas para diseno de moda. Alternativa gratuita a CLO 3D.'),
        ('Adobe Express (web, gratis)', 'Herramienta web gratuita de Adobe, alternativa a Canva. Para mockups, posts y presentaciones. Sin instalacion.'),
        ('Adobe Fresco (gratis con cuenta Adobe)', 'App de ilustracion de Adobe, gratuita con limites. Disponible en Mac App Store, alternativa a Procreate en Mac.'),
        ('Adobe Color (web, 100% gratis)', 'Herramienta web gratuita de Adobe para crear y explorar paletas de color. Exporta a ASE y HEX.'),
        ('Adobe Fonts (gratis con cuenta Adobe ID)', 'Biblioteca de tipografias profesionales gratis con cuenta Adobe ID. Compatible con macOS.'),
        ('Adobe Portfolio (gratis con cuenta Adobe)', 'Crea tu portfolio web de marca gratis con Adobe Portfolio. Plantillas minimalistas, hosting incluido.'),
        ('Photopea (web, gratis)', 'Editor de imagenes gratuito en navegador. Abre y guarda archivos PSD de Photoshop sin instalar nada.'),
        ('CLO 3D (trial 30 dias + estudiante gratis)', 'Software lider de diseno de moda 3D. Compatible con macOS Apple Silicon. Trial gratis de 30 dias. Licencia de estudiante gratuita.'),
        ('Valentina (patronaje, gratis, Mac)', 'Software libre de patronaje para macOS. Alternativa gratuita a Seamly2D. Crea patrones 2D escalables.'),
        ('Procreate (solo iPad, 13 euros)', 'Aclaracion: Procreate NO existe para Mac. Es exclusivo de iPad. Para Mac, usa Krita o Adobe Fresco.'),
    ]),
    ('Tutoriales YouTube - Diseno Digital en Mac', [
        ('Adobe Express Tutoriales oficiales (Adobe)', 'Canal oficial de Adobe con tutoriales gratuitos sobre Adobe Express. Para crear mockups, posts y presentaciones sin coste.'),
        ('Adobe Fresco Tutoriales oficiales', 'Tutoriales oficiales de Adobe Fresco para ilustracion digital. Aprende a configurar pinceles y exportar ilustraciones.'),
        ('Inkscape para Fashion Design', 'Busca "Inkscape fashion design" en YouTube. Tutoriales especificos sobre flats, croquis y tech packs vectoriales sin pagar Adobe Illustrator.'),
        ('GIMP Tutoriales en espanol', 'Tutoriales en espanol sobre GIMP para principiantes. Edicion de fotos de producto, texturas y mockups.'),
        ('Krita Digital Painting Tutoriales', 'Tutoriales sobre Krita para ilustracion digital. Con tableta grafica conectada a tu Mac, Krita sustituye a Procreate.'),
        ('Blender Cloth Simulation Tutoriales', 'Tutoriales especificos sobre simulacion de telas en Blender para diseno de moda 3D. Blender es 100% gratuito y nativo para macOS Apple Silicon.'),
        ('CLO 3D Official Channel', 'Canal oficial de CLO 3D con tutoriales paso a paso, casos de estudio y novedades del software.'),
        ('Zoe Hong (playlist CLO 3D)', 'Zoe Hong tiene una playlist especifica sobre CLO 3D para principiantes. Muy didactica.'),
        ('Adobe Education en Coursera (audit gratis)', 'Curso oficial de Adobe Education sobre herramientas gratuitas de Creative Cloud: Color, Fonts, Express, Fresco, Portfolio.'),
    ]),
    ('Bancos de Imagenes e Inspiracion', [
        ('Unsplash', 'Fotografia artistica de alta calidad. Busca "techwear", "urban", "minimal architecture".'),
        ('Pexels', 'Fotos y videos gratuitos. Mejor que Unsplash para imagenes de producto y lifestyle urbano.'),
        ('Pixabay', 'Imagenes, vectores e ilustraciones libres. Util para texturas y elementos graficos.'),
        ('Pinterest', 'Tu herramienta principal de moodboarding. Crea tableros separados: siluetas, paletas, tejidos, fotografia, detalles tecnicos.'),
        ('Behance', 'La mayor fuente de inspiracion de diseno profesional. Mira portfolios techwear y casos completos de branding.'),
        ('Dribbble', 'Inspiracion de UI/UX y logos. Busca "techwear logo" para ver lo que ya existe y diferenciarte.'),
        ('Arena', 'Alternativa mas "editorial" a Pinterest. Menos ruido, mas curada. Util para construir moodboards conceptuales.'),
    ]),
    ('Tejidos y Proveedores (Espana)', [
        ('Tejidos Royo (Valencia)', 'Mayorista historico de tejidos en Espana con venta online al particular. Buen punto de partida para pedir muestras.'),
        ('Filatures du Park (Tienda online)', 'Tejidos tecnicos y sostenibles. Especialmente util para techwear (cordura, ripstop, softshell).'),
        ('Merceria Creativa (online)', 'Venta al detalle de tejidos, hilos y accesorios para costura. Cantidades pequenas para principiantes.'),
        ('Feria MOMAD Madrid (eventos fisicos)', 'Feria de moda en Madrid abierta a profesionales. Asistir como visitante te da acceso a proveedores en un solo dia.'),
    ]),
    ('Extensiones de Navegador', [
        ('ColorZilla', 'Cualquier color de cualquier web con un clic. Perfecto para estudiar paletas de marcas que admiras.'),
        ('WhatFont', 'Identifica la tipografia de cualquier web al pasar el cursor. Imprescindible para estudiar referentes.'),
        ('GoFullPage', 'Captura toda una web en un solo PNG largo. Util para archivar inspiracion y referencia.'),
        ('Notion Web Clipper', 'Guarda cualquier web en tu Notion. Tu biblioteca personal de referencias techwear organizada.'),
        ('Fonts Ninja', 'Detecta tipografias comerciales y te dice donde comprarlas (o alternativas gratuitas).'),
        ('Pinterest Save Button', 'Guarda cualquier imagen de cualquier web directamente a tus tableros. Acelera el moodboarding.'),
    ]),
    ('Comunidades', [
        ('r/streetwearstartup', 'Subreddit de fundadores de marcas streetwear. Feedback brutal pero util. Lee 50 posts antes de publicar.'),
        ('r/streetwear', 'Subreddit general de streetwear. Estudia que estetica recibe upvotes y cual no.'),
        ('r/techwear', 'Comunidad hardcore de techwear. Lee mucho antes de publicar, son exigentes con la autenticidad.'),
        ('r/fashiondesign', 'Comunidad de disenadores de moda. Util para feedback tecnico sobre tus bocetos y patrones.'),
        ('Discord: Hidden Champions', 'Servidor Discord de marcas emergentes. Networking real con otros fundadores en tu misma fase.'),
        ('Foro: Shopify Community ES', 'Foro oficial de Shopify en espanol. Resuelve dudas tecnicas con otros duenos de tienda.'),
    ]),
    ('Plataformas de Aprendizaje', [
        ('Shopify Compass', 'Cursos 100% gratuitos de Shopify sobre ecommerce, marketing y branding. Empieza por aqui.'),
        ('Domestika Plus (trial 7 dias)', 'Trial gratuito de 7 dias. Cancela antes de que cobren. Acceso a mas de 2.000 cursos durante la semana.'),
        ('Google Digital Garage', 'Certificacion gratuita en marketing digital de Google. 40h de contenido. Ideal para tu fase de comunidad.'),
        ('Coursera (audit mode)', 'Cursos de universidades top (Parsons, MoMA, FIT) auditables gratis. Filtra por "Fashion Design" y elige sin certificado.'),
        ('freeCodeCamp', 'Aprende HTML y CSS basico gratis. NO obligatorio para Shopify, pero util para personalizar tu theme.'),
        ('HubSpot Academy', 'Cursos gratuitos sobre email marketing, redes sociales y ventas. Certificacion reconocida.'),
        ('Figma Academy (YouTube oficial)', 'Tutoriales oficiales de Figma. Empieza por "Figma for Beginners" (4h, gratuito).'),
    ]),
    ('Libros y Referencias Teoricas', [
        ('The Anatomy of Fashion (Phyllis Tortora)', 'Enciclopedia visual de como se construye la ropa. Referencia para entender por que cada prenda es como es.'),
        ('Tech Packs for Beginners (blog The Evans Group)', 'Blog gratuito con articulos detallados sobre como construir un tech pack profesional. Imprescindible.'),
        ('Fashionary International', 'Web de la marca Fashionary con recursos gratuitos, plantillas y blog de diseno de moda.'),
        ('Business of Fashion (BoF) gratis', 'Newsletter gratuito con analisis de industria. Te dara contexto de mercado y tendencias.'),
        ('Ssense Editorial', 'Editorial gratuita de la tienda Ssense. Articulos profundos sobre estetica, marcas emergentes y cultura fashion.'),
    ]),
]


def build_recursos():
    story = []
    story.extend(section_header('05', 'Ecosistema de Recursos Gratuitos'))
    story.append(h2('Todo lo que necesitas, sin gastar un euro mas.'))
    story.append(body(
        'Mas de 70 herramientas, canales y comunidades seleccionadas a mano. No estan todas '
        'las que existen, solo las que de verdad usaras. Marcadas como Gratis, Freemium o '
        'Trial para que sepas que esperar antes de pinchar.'
    ))
    story.append(spacer(6*mm))

    for cat_name, items in recursos_categorias:
        story.append(KeepTogether([
            Paragraph(cat_name.upper(), styles['MonoLabel']),
            Paragraph(f'{len(items)} recursos', styles['Mono']),
            Spacer(1, 3*mm),
        ]))
        # Table of resources
        data = [['RECURSO', 'DESCRIPCION']]
        for name, desc in items:
            data.append([name, desc])
        t = Table(data, colWidths=[55*mm, 109*mm], repeatRows=1)
        t.setStyle(TableStyle([
            ('FONTNAME', (0,0), (-1,0), 'Mono-Bold'),
            ('FONTNAME', (0,1), (0,-1), 'Body-Bold'),
            ('FONTNAME', (1,1), (1,-1), 'Body'),
            ('FONTSIZE', (0,0), (-1,0), 7),
            ('FONTSIZE', (0,1), (-1,-1), 8),
            ('TEXTCOLOR', (0,0), (-1,0), C_FG),
            ('TEXTCOLOR', (0,1), (-1,-1), C_FG),
            ('TEXTCOLOR', (1,1), (1,-1), C_MUTED),
            ('BACKGROUND', (0,0), (-1,0), C_BG_MID),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('TOPPADDING', (0,0), (-1,-1), 5),
            ('BOTTOMPADDING', (0,0), (-1,-1), 5),
            ('LEFTPADDING', (0,0), (-1,-1), 5),
            ('RIGHTPADDING', (0,0), (-1,-1), 5),
            ('GRID', (0,0), (-1,-1), 0.3, C_BORDER),
        ]))
        story.append(t)
        story.append(spacer(8*mm))

    # Tips
    story.append(Paragraph('TRES CONSEJOS FINALES', styles['MonoLabel']))
    story.append(spacer(2*mm))
    tips = [
        ('01', 'No te suscribas a todo', 'Elige 2 o 3 canales de YouTube y siguelos a fondo. Suscribirte a 50 no te hace mas productivo, te hace mas ansioso. La profundidad vence a la amplitud.'),
        ('02', 'Usa el plan gratis primero', 'Las versiones gratuitas de Figma, Mailchimp y Canva son suficientes para llegar a tu primer drop. Paga solo cuando el negocio lo justifique con ingresos.'),
        ('03', 'Participa, no observes', 'En Reddit y Discord, el 90% aprende leyendo y el 10% ensena respondiendo. Se parte del 10%. Es la forma mas rapida de aprender y de hacer networking real.'),
    ]
    for num, title, body_t in tips:
        story.append(Paragraph(f'<font name="Mono-Bold" color="#6B6B6B">{num}</font>  <b>{title}</b>', styles['Body']))
        story.append(body_muted(body_t))
    story.append(PageBreak())
    return story


# ============================================================
# CONTENT - HARDWARE
# ============================================================

hardware_tiers = [
    {
        'num': '01', 'name': 'Kit Esencial', 'price': '60 eur aprox.',
        'tagline': 'Lo justo para bocetar y digitalizar.',
        'description': 'Si el presupuesto es ajustado. Con este kit se pueden completar las fases de Concepto, Diseno de Prendas y Marca y Web sin problema. Incluye bloc de bocetos especifico para moda.',
        'items': [
            ('Libreta Moleskine A5 cuadriculada', '12 eur', 'Para bocetar logo, ideas de prendas y moodboard personal. Cuadricula equivale a simetria.'),
            ('Bloc de bocetos A4 para moda (90gsm, 40 hojas)', '8 eur', 'Hojas mas grandes para dibujar croquis y siluetas de prendas con detalle.'),
            ('Set lapices de grafito Staedtler Mars (6 piezas)', '8 eur', 'Durezas variadas para bocetar desde lineas suaves hasta trazos definidos.'),
            ('Rotuladores Pigma Micron (3 piezas, 0.2/0.4/0.6)', '12 eur', 'Para pasar a tinta los bocetos finales del logo y los flats de prendas.'),
            ('Marcadores de tonos grises Copic (3 piezas)', '18 eur', 'Para dar volumen a los flats de prendas y entender como cae la luz sobre el tejido.'),
            ('Raton optico Logitech M90 (basico)', '15 eur', 'Si tu portatil tiene trackpad malo, este raton cambiara tu vida en Figma.'),
        ],
    },
    {
        'num': '02', 'name': 'Kit Creativo', 'price': '170 eur aprox.',
        'tagline': 'Tableta grafica para digitalizar como profesional.',
        'description': 'El equilibrio perfecto. Permite digitalizar bocetos a mano con tableta, iluminar bien el espacio y grabar videos de proceso con el movil. Recomendado para alguien que va en serio.',
        'items': [
            ('Todo lo del Kit Esencial', '58 eur aprox.', 'Libretas, bloc de moda, lapices, rotuladores, marcadores y raton.'),
            ('Tableta grafica Wacom Intuos S', '60 eur', 'Estandar de la industria para digitalizar a mano en Figma, Photopea o Krita.'),
            ('Auriculares con cable Sony MDR-ZX110', '20 eur', 'Para ver tutoriales sin molestar y para grabar voiceovers de tus videos de proceso.'),
            ('Soporte de movil Ulanzi para grabar vertical', '15 eur', 'Estable para grabar videos de proceso en TikTok o Reels.'),
            ('Lampara de escritorio LED TaoTronics', '22 eur', 'Luz neutra ajustable. Clave para fotos de producto con movil.'),
        ],
    },
    {
        'num': '03', 'name': 'Kit Estudio', 'price': '470 eur aprox.',
        'tagline': 'Tableta con pantalla y setup completo de grabacion.',
        'description': 'Si quieres algo realmente transformador. Con iPad y Apple Pencil podras digitalizar a mano alzada, disenar en cualquier lugar y grabar tutoriales de calidad.',
        'items': [
            ('Todo lo del Kit Creativo (sin Wacom Intuos)', '105 eur aprox.', 'Libretas, bloc, lapices, rotuladores, marcadores, raton, auriculares, soporte y lampara.'),
            ('iPad 9 generacion 64GB', '329 eur', 'Modelo mas asequible. Suficiente para Procreate, Figma mobile y edicion en CapCut.'),
            ('Apple Pencil 1 gen (compatible con iPad 9)', '89 eur', 'Dibujar directamente sobre la pantalla. Probablemente la herramienta mas transformadora.'),
            ('Tripode movil Amazon Basics 1,5m', '15 eur', 'Para grabarte a ti mismo presentando drops o haciendo unboxing en vertical.'),
            ('Anillo de luz Ulanzi 10 pulgadas con tripode', '27 eur', 'Iluminacion profesional para fotos de producto, videos de TikTok y lives de Instagram.'),
        ],
    },
]


def build_hardware():
    story = []
    story.extend(section_header('06', 'Hardware y Materiales'))
    story.append(h2('El set fisico. Para empezar con buen pie.'))
    story.append(body(
        'Tres niveles de presupuesto para que elijas el que mejor encaje como regalo. Los '
        'precios son orientativos (Amazon espanol, julio 2026) y los productos concretos son '
        'recomendaciones. Sustituye por equivalentes si lo prefieres.'
    ))
    story.append(spacer(6*mm))

    for tier in hardware_tiers:
        story.append(KeepTogether([
            Paragraph(f'TIER {tier["num"]}', styles['MonoLabel']),
            h2(tier['name']),
            Paragraph(f'<font color="#6B6B6B">{tier["price"]} - {tier["tagline"]}</font>', styles['Mono']),
            Spacer(1, 3*mm),
            body(tier['description']),
        ]))
        story.append(spacer(2*mm))
        data = [['ITEM', 'PRECIO', 'POR QUE']]
        for name, price, why in tier['items']:
            data.append([name, price, why])
        t = Table(data, colWidths=[55*mm, 18*mm, 91*mm], repeatRows=1)
        t.setStyle(TableStyle([
            ('FONTNAME', (0,0), (-1,0), 'Mono-Bold'),
            ('FONTNAME', (0,1), (0,-1), 'Body-Bold'),
            ('FONTNAME', (1,1), (1,-1), 'Mono'),
            ('FONTNAME', (2,1), (2,-1), 'Body'),
            ('FONTSIZE', (0,0), (-1,0), 7),
            ('FONTSIZE', (0,1), (-1,-1), 8),
            ('TEXTCOLOR', (0,0), (-1,0), C_FG),
            ('TEXTCOLOR', (0,1), (-1,-1), C_FG),
            ('TEXTCOLOR', (2,1), (2,-1), C_MUTED),
            ('BACKGROUND', (0,0), (-1,0), C_BG_MID),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('TOPPADDING', (0,0), (-1,-1), 5),
            ('BOTTOMPADDING', (0,0), (-1,-1), 5),
            ('LEFTPADDING', (0,0), (-1,-1), 5),
            ('RIGHTPADDING', (0,0), (-1,-1), 5),
            ('GRID', (0,0), (-1,-1), 0.3, C_BORDER),
        ]))
        story.append(t)
        story.append(spacer(8*mm))
        story.append(hr())

    story.append(spacer(4*mm))
    story.append(h3('Y un portatil?'))
    story.append(body(
        'Si ya tienes cualquier portatil de los ultimos 4 anos (8GB RAM minimo), NO necesitas '
        'comprar uno nuevo. Figma y Shopify funcionan en cualquier maquina decente. Solo '
        'considera actualizar si tienes menos de 8GB RAM o un disco HDD (no SSD). Para diseno '
        'digital avanzado (CLO 3D, Browzwear) se recomiendan 16GB RAM. Para MacBook Air M4, '
        '8GB es suficiente para todo el software gratuito mencionado (Inkscape, GIMP, Krita, '
        'Blender, Adobe Express, Adobe Fresco).'
    ))
    story.append(spacer(6*mm))
    story.append(h3('Nota sobre el presupuesto total del proyecto'))
    story.append(body(
        'Los 50 euros de cursos mas el hardware son solo el inicio. El coste real del primer '
        'drop (incluyendo dominio, Shopify 3 meses, muestras fisicas y produccion de 50 prendas) '
        'oscila entre 600 y 1.500 euros dependiendo de la via (POD, blanks o cut-and-sew). Es '
        'importante tener esto claro desde el principio para no frustrarse cuando llegue la '
        'fase de produccion.'
    ))
    story.append(PageBreak())
    return story


# ============================================================
# CONTENT - GLOSARIO
# ============================================================

glosario_terminos = [
    ('Mockup', 'Plantilla digital que simula como se vera tu diseno en una prenda real (camiseta, hoodie, gorra). Te permite ver el resultado ANTES de fabricar. Esencial para validar con tu audiencia.', 'Diseno'),
    ('Tech Pack', 'Documento tecnico que le envias al fabricante con TODAS las especificaciones de una prenda: medidas, tipo de tejido, peso (GSM), ubicacion exacta de cada print o bordado, colores Pantone. Sin esto, el fabricante adivina.', 'Produccion'),
    ('GSM', 'Grams per Square Meter (gramos por metro cuadrado). Mide el peso del tejido. Un hoodie techwear premium suele ser 380 a 480 GSM. Menos de 180 GSM se siente barato.', 'Produccion'),
    ('MOQ', 'Minimum Order Quantity (cantidad minima de pedido). Cada fabricante exige un minimo de unidades por prenda. Para empezar, busca MOQ de 30 a 50 unidades.', 'Produccion'),
    ('Drop', 'Lanzamiento limitado y fechado de una coleccion. La escasez (pocas unidades, ventana corta de venta) crea urgencia. Supreme, Palace y Corteiz construyeron su imperio sobre este modelo.', 'Marketing'),
    ('Hype', 'Expectativa y deseo colectivo antes del lanzamiento. Se construye con teasers, contenido detras de camaras y comunidad activa. Sin hype, el drop fracasa por bueno que sea el producto.', 'Marketing'),
    ('SKU', 'Stock Keeping Unit. Codigo unico que identifica cada variante de producto. Una camiseta en 3 tallas y 2 colores equivale a 6 SKUs.', 'E-commerce'),
    ('Cut and Sew', 'Fabricacion desde cero: el fabricante corta el tejido y cose la prenda segun tu patron. Maxima personalizacion pero coste y tiempo altos. Opuesto a usar blanks.', 'Produccion'),
    ('Blank', 'Prenda basica ya fabricada (sin marca visible) que compras al por mayor para personalizar con serigrafia, bordado o DTG. Marcas premium: AS Colour, Comfort Colors, Bella+Canvas.', 'Produccion'),
    ('POD (Print-on-Demand)', 'Modelo donde un proveedor (Printful, Printify) imprime y envia la prenda SOLO cuando recibes un pedido. Cero stock, cero riesgo, pero margen bajo (30 a 40%).', 'E-commerce'),
    ('Brand Kit', 'Documento de 1 a 3 paginas que reune: logo (en sus variantes), paleta de colores con codigos HEX, tipografias, y reglas de uso correcto e incorrecto. Es la Biblia visual de tu marca.', 'Diseno'),
    ('HEX / Pantone', 'Sistemas de codigo de color. HEX (ej: #0A0A0A) se usa en web y digital. Pantone (ej: Pantone Black 6 C) se usa en impresion y serigrafia. Tu paleta debe tener ambos codigos.', 'Diseno'),
    ('Serigrafia', 'Tecnica de impresion donde la tinta se presiona a traves de una malla. Mejor para graficos solidos y tiradas grandes (50+ unidades). Resultado duradero y vibrante.', 'Produccion'),
    ('DTG (Direct-to-Garment)', 'Impresion directa sobre la prenda con tecnologia similar a una impresora de tinta. Mejor para tiradas pequenas, fotos y disenos con muchos colores.', 'Produccion'),
    ('Bordado', 'Tecnica donde el logo se cose con hilo directamente sobre la prenda. Premium y duradero. Ideal para logos pequenos en pecho o gorras. Mas caro que serigrafia.', 'Produccion'),
    ('Conversion Rate', 'Porcentaje de visitantes de tu web que terminan comprando. Para una marca nueva, 1 a 2% es normal. Si vendes 100 prendas con 5.000 visitas, tu tasa es 2%.', 'E-commerce'),
    ('Lookbook', 'Documento visual (PDF o web) que presenta tu coleccion completa con fotografias profesionales estilo editorial. No vende directamente, pero posiciona la marca como real.', 'Marketing'),
    ('Waitlist', 'Lista de correos de personas interesadas ANTES del lanzamiento. Se construye con la pagina Coming Soon en Shopify. Un waitlist de 100 personas vale mas que 10.000 seguidores sin email.', 'Marketing'),
    ('Seeding', 'Enviar muestras gratuitas a creadores y micro-influencers para que las usen y, idealmente, las mencionen. Funciona si eliges bien (creadores que ya visten tu estetica).', 'Marketing'),
    ('Theme (Shopify)', 'Plantilla visual pre-disenada para tu tienda Shopify. Themes gratuitos recomendados para empezar: Dawn, Sense, Refresh. Themes de pago (unos 200 euros una vez): Impulse, Prestige, Empire.', 'E-commerce'),
    ('Croquis', 'Boceto rapido de la figura humana (generalmente 9 cabezas de alto, idealizado) sobre el que dibujas tus prendas. Es la base del fashion sketch. Puedes usar plantillas gratuitas para empezar.', 'Moda'),
    ('Flat (Flat Sketch)', 'Dibujo tecnico de una prenda, sin volumen ni sombras, mostrando construccion y costuras. Es el plano que va dentro del tech pack. Se dibuja en vista frontal y a veces posterior.', 'Moda'),
    ('Patronaje', 'Arte de crear el patron: las plantillas de papel con las formas que, recortadas en tejido y cosidas, construyen una prenda. Puede ser plano (2D) o tridimensional (draping sobre maniqui).', 'Moda'),
    ('Silueta', 'Forma exterior de una prenda cuando se lleva puesta. En techwear predominan siluetas boxy (caja), oversized o asimetricas. La silueta es lo primero que un cliente percibe, antes que el logo.', 'Moda'),
    ('Drop Shoulder', 'Tipo de sisa donde la costura del hombro cae por el brazo, no en el hombro natural. Muy comun en streetwear y techwear para dar un look relajado y oversized.', 'Moda'),
    ('Raglan', 'Tipo de manga donde la costura va desde la axila hasta el cuello en diagonal. Permite mayor libertad de movimiento y se usa mucho en prendas deportivas y techwear.', 'Moda'),
    ('Drapeado', 'Como cae y se mueve el tejido sobre el cuerpo. Un tejido con buen drapeado se adapta a la forma; uno rigido mantiene silueta. Clave para elegir tejido segun la prenda.', 'Moda'),
    ('Cordura', 'Marca de tejido tecnico de nylon, altamente resistente a la abrasion. Estandar en techwear para pantalones, mochilas y refuerzos. Mas caro que el algodon pero diferenciador.', 'Moda'),
    ('Ripstop', 'Tejido con patron de cuadricula visible que evita que los desgarros se extiendan. Muy usado en techwear y mil-tech por su resistencia y ligereza.', 'Moda'),
    ('Softshell', 'Tejido tecnico de tres capas que combina impermeabilidad, transpirabilidad y elasticidad. Ideal para chaquetas techwear. Mas caro que el polyester normal.', 'Moda'),
    ('Moodboard', 'Tablero visual (fisico o digital, tipicamente en Pinterest) que reune imagenes, tejidos, colores y referencias que definen el universo estetico de tu marca o coleccion. Es tu brujula visual.', 'Diseno'),
    ('Persona (Buyer Persona)', 'Ficha detallada de tu cliente ideal: nombre inventado, edad, ciudad, ingresos, hobbies, miedos, aspiraciones, donde consume contenido. Cuanto mas concreta, mas faciles son las decisiones de diseno y marketing.', 'Marketing'),
    ('Manifesto de Marca', 'Texto breve (1 a 3 parrafos) que declara que defiende tu marca y contra que se rebela. Es la declaracion de intenciones que da coherencia a todas tus decisiones futuras.', 'Marketing'),
    ('CLO 3D', 'Software lider de diseno de moda en 3D. Permite simular prendas sobre avatares virtuales, ajustar patrones en tiempo real y renderizar imagenes fotorrealistas. Compatible con macOS Apple Silicon. Trial de 30 dias y licencia de estudiante gratuita con email .edu.', 'Moda'),
    ('Blender', 'Software 3D 100% gratuito y de codigo abierto, nativo para macOS Apple Silicon. Su motor Cloth Simulator permite simular telas para diseno de moda. Alternativa libre a CLO 3D.', 'Moda'),
    ('Inkscape', 'Editor vectorial gratuito y de codigo abierto, nativo para macOS Apple Silicon (M1 a M4). Alternativa libre a Adobe Illustrator. Estandar para flats y tech packs digitales en presupuestos cero.', 'Diseno'),
    ('Adobe Express', 'Herramienta web gratuita de Adobe, alternativa a Canva. Funciona en navegador sin instalacion. Permite crear mockups, posts para redes y presentaciones de marca. Cuenta Adobe ID gratuita.', 'Diseno'),
    ('Adobe Fresco', 'App de ilustracion de Adobe, gratis con cuenta Adobe ID. Disponible en Mac App Store para macOS Apple Silicon. Alternativa a Procreate (que solo existe en iPad) en Mac.', 'Diseno'),
    ('Adobe Color', 'Herramienta web 100% gratuita de Adobe para crear y explorar paletas de color. Exporta a ASE y a HEX. Sin cuenta, sin coste. Esencial para tu Brand Kit bicromatico.', 'Diseno'),
    ('Adobe Fonts', 'Biblioteca de tipografias profesionales gratuita con cuenta Adobe ID. Compatible con macOS. Sustituye a Google Fonts con opciones mas premium. Licencia personal y comercial incluida.', 'Diseno'),
    ('Apple Silicon (M1, M2, M3, M4)', 'Familia de procesadores ARM disenados por Apple para Mac. Incluyen GPU integrada potente. MacBook Air M4 pertenece a esta familia. La mayoria de software gratuito mencionado en esta guia es nativo para Apple Silicon, sin necesidad de Rosetta 2.', 'Diseno'),
    ('Rosetta 2', 'Tecnologia de Apple que permite ejecutar apps compiladas para procesadores Intel en Mac con Apple Silicon. Casi todo el software actual ya es nativo para Apple Silicon. Solo apps antiguas o sin actualizar necesitan Rosetta 2.', 'Diseno'),
    ('DMG (Disk Image)', 'Formato de archivo de instalacion estandar en macOS. Para instalar apps desde DMG: doble clic para abrir, arrastra el icono de la app a la carpeta Applications, expulsa el DMG.', 'Diseno'),
    ('Valentina (patronaje)', 'Software libre de patronaje para macOS. Alternativa gratuita a Seamly2D (mas orientado a Windows). Crea patrones 2D escalables a partir de medidas corporales.', 'Moda'),
    ('Vectorial (Vector)', 'Tipo de imagen digital compuesta por trayectorias matematicas, no pixeles. Escala sin perder calidad. Inkscape (gratis), Adobe Illustrator (pago) y Affinity Designer (pago unico) son editores vectoriales.', 'Diseno'),
    ('Flat digital', 'Version digital del flat sketch hecha en software vectorial (Inkscape en macOS gratuito, Illustrator en pago). Es el plano que va dentro del tech pack y el que el fabricante va a interpretar.', 'Moda'),
    ('Renderizado (Render)', 'Proceso de generar una imagen fotorrealista a partir de un modelo 3D digital. En CLO 3D o Blender, el render produce imagenes de prendas virtuales que parecen fotos reales. Con MacBook Air M4, los renders son 5 a 10 veces mas rapidos que en PC antiguo.', 'Moda'),
    ('Avatar 3D', 'Modelo humano virtual sobre el que se simulan prendas en CLO 3D o Blender. Se puede ajustar a medidas corporales reales para previsualizar fit y caida de la prenda sin necesidad de prototipo fisico.', 'Moda'),
    ('Drapeado digital', 'Simulacion virtual de como cae y se mueve un tejido sobre un avatar 3D. Permite previsualizar el comportamiento del tejido antes de producir, ahorrando costes de muestras fisicas. CLO 3D y Blender lo permiten.', 'Moda'),
    ('Paso de muestra (Sampling Round)', 'Cada iteracion de prototipo fisico que pides al fabricante. Con software 3D como CLO o Blender, puedes reducir los pasos de muestra de 3 a 1, ahorrando tiempo y cientos de euros por drop.', 'Produccion'),
]


def build_glosario():
    story = []
    story.extend(section_header('07', 'Glosario del Principiante'))
    story.append(h2('Cada termino tecnico, explicado como a un humano.'))
    story.append(body(
        'Cuando un tutorial o un fabricante use una palabra que no entiendas, vuelve aqui. Si '
        'echas en falta algun termino, escribelo en tu libreta y buscalo despues. Este glosario '
        'crece contigo.'
    ))
    story.append(spacer(4*mm))
    story.append(Paragraph(f'TOTAL TERMINOS: {len(glosario_terminos)}', styles['MonoLabel']))
    story.append(spacer(6*mm))

    # Agrupar por categoria
    categorias = {}
    for term, defn, cat in glosario_terminos:
        categorias.setdefault(cat, []).append((term, defn))

    for cat in ['Diseno', 'Produccion', 'E-commerce', 'Marketing', 'Moda']:
        if cat not in categorias:
            continue
        story.append(Paragraph(f'CATEGORIA: {cat.upper()} ({len(categorias[cat])} terminos)', styles['MonoLabel']))
        story.append(spacer(2*mm))
        data = [['TERMINO', 'DEFINICION']]
        for term, defn in categorias[cat]:
            data.append([term, defn])
        t = Table(data, colWidths=[40*mm, 124*mm], repeatRows=1)
        t.setStyle(TableStyle([
            ('FONTNAME', (0,0), (-1,0), 'Mono-Bold'),
            ('FONTNAME', (0,1), (0,-1), 'Body-Bold'),
            ('FONTNAME', (1,1), (1,-1), 'Body'),
            ('FONTSIZE', (0,0), (-1,0), 7),
            ('FONTSIZE', (0,1), (-1,-1), 8),
            ('TEXTCOLOR', (0,0), (-1,0), C_FG),
            ('TEXTCOLOR', (0,1), (-1,-1), C_FG),
            ('TEXTCOLOR', (1,1), (1,-1), C_MUTED),
            ('BACKGROUND', (0,0), (-1,0), C_BG_MID),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('TOPPADDING', (0,0), (-1,-1), 5),
            ('BOTTOMPADDING', (0,0), (-1,-1), 5),
            ('LEFTPADDING', (0,0), (-1,-1), 5),
            ('RIGHTPADDING', (0,0), (-1,-1), 5),
            ('GRID', (0,0), (-1,-1), 0.3, C_BORDER),
        ]))
        story.append(t)
        story.append(spacer(8*mm))
    story.append(PageBreak())
    return story


# ============================================================
# CONTENT - CIERRE FINAL
# ============================================================

def build_cierre():
    story = []
    story.extend(section_header('08', 'Cierre'))
    story.append(h2('Tu primer drop no es la linea de meta. Es la senal de salida.'))
    story.append(body(
        'Esta guia es un punto de partida, no un contrato. Adapta a tu ritmo, a tu realidad y '
        'a lo que vayas descubriendo por el camino. Lo unico que no se puede adaptar es la '
        'constancia: sin ella, ni el mejor roadmap del mundo sirve.'
    ))
    story.append(body(
        'Si llegaste hasta aqui, ya estas mas cerca que el 90% de la gente que dice "algun '
        'dia montare una marca". El dia que lances tu primer drop, celebra. Lo mereces.'
    ))
    story.append(spacer(8*mm))
    story.append(pull(
        '"Las marcas que vale la pena construir tardan mas en construirse, pero tambien duran '
        'mas." Anonimo, en algun foro de streetwear que ya no existe.'
    ))
    story.append(spacer(8*mm))
    # Final stats
    story.append(Paragraph('FICHA DEL DOCUMENTO', styles['MonoLabel']))
    ficha = [
        ['Documento', 'BP-001 / v2.2'],
        ['Ano', '2026'],
        ['Scope', 'Techwear / Espana / Nivel cero'],
        ['Duracion', '6 meses'],
        ['Fases', '05 fases / 64 tareas'],
        ['Inversion', '<= 50 euros cursos + hardware opcional'],
        ['Software', '100% gratuito en macOS Apple Silicon M4'],
    ]
    t = Table(ficha, colWidths=[40*mm, 124*mm])
    t.setStyle(TableStyle([
        ('FONTNAME', (0,0), (0,-1), 'Mono-Bold'),
        ('FONTNAME', (1,0), (1,-1), 'Body'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
        ('TEXTCOLOR', (0,0), (0,-1), C_MUTED),
        ('TEXTCOLOR', (1,0), (1,-1), C_FG),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LINEBELOW', (0,0), (-1,-1), 0.3, C_BORDER),
    ]))
    story.append(t)
    return story


# ============================================================
# BUILD PDF
# ============================================================

def build_pdf(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=MARGIN_L,
        rightMargin=MARGIN_R,
        topMargin=MARGIN_T,
        bottomMargin=MARGIN_B,
        title='BLACKPRINT - Guia Maestra de Marca Techwear',
        author='BLACKPRINT Guide',
        subject='Guia interactiva para crear una marca streetwear techwear desde cero',
        creator='BLACKPRINT PDF Generator',
    )

    # Frame for body pages
    frame_body = Frame(
        MARGIN_L, MARGIN_B,
        PAGE_W - MARGIN_L - MARGIN_R,
        PAGE_H - MARGIN_T - MARGIN_B,
        leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0,
        showBoundary=0
    )

    # Frame for cover (full bleed)
    frame_cover = Frame(
        MARGIN_L, MARGIN_B,
        PAGE_W - MARGIN_L - MARGIN_R,
        PAGE_H - MARGIN_T - MARGIN_B,
        leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0,
        showBoundary=0
    )

    cover_template = PageTemplate(
        id='cover', frames=[frame_cover], onPage=draw_cover_background
    )
    body_template = PageTemplate(
        id='body', frames=[frame_body], onPage=draw_body_decorations
    )
    doc.addPageTemplates([cover_template, body_template])

    story = []
    # Cover
    story.extend(build_cover())
    # Switch to body template
    story.append(NextPageTemplate('body'))
    # Sections
    story.extend(build_intro())
    story.extend(build_concepto())
    story.extend(build_diseno())
    story.extend(build_roadmap())
    story.extend(build_cursos())
    story.extend(build_recursos())
    story.extend(build_hardware())
    story.extend(build_glosario())
    story.extend(build_cierre())

    doc.build(story)
    return output_path


if __name__ == '__main__':
    output_dir = '/home/z/my-project/download'
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, 'blackprint-guia-completa.pdf')
    print(f'Generating PDF: {output_path}')
    build_pdf(output_path)
    size_kb = os.path.getsize(output_path) / 1024
    print(f'PDF generated: {output_path}')
    print(f'Size: {size_kb:.1f} KB')

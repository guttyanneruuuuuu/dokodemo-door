// ============================================================
// WARPDOOR v7 — Enhanced Cinematic 3D Scene Builders
// Powered by Three.js with advanced lighting, textures, and immersion
// ============================================================
import * as THREE from 'three'

/* ------------------------------------------------------------
 * WORLDS METADATA
 * ------------------------------------------------------------ */
export const WORLDS = [
  {
    id: 'rome',
    name: '古代ローマ',
    subtitle: 'Roma Aeterna',
    year: '紀元前 50年',
    desc: '剣闘士が闘い、テルマエで市民が語らう。神殿が黄金に輝く永遠の都。',
    color: '#e8a060',
    accent: '#f5cc80',
    sky: '#f2b974',
    fog: 0xf3c380,
    emoji: '🏛',
    tags: ['古代', '地中海', '帝国'],
    warps: 84231,
    discoveries: [
      'テルマエ（公衆浴場）で市民が談笑しています',
      '剣闘士が訓練場で腕を磨いています',
      '神官が神殿で厳かな祭事を行っています',
      '商人が市場でワインと香辛料を売っています',
      '競技場から歓声が聴こえます',
      '詩人がフォロで演説を始めました',
      '黄金の夕日が石畳を照らしています',
    ],
    soundscape: { tone: 'warm', freq: 220, ambient: 'crowd' },
  },
  {
    id: 'tokyo2150',
    name: '未来の東京',
    subtitle: 'Neo Tokyo 2150',
    year: '2150年',
    desc: 'どこでもドアが路上に並び、空飛ぶ車が行き交う。AIと人間が融合した光の都市。',
    color: '#00d4ff',
    accent: '#ff4488',
    sky: '#060018',
    fog: 0x0a0030,
    emoji: '🚀',
    tags: ['未来', 'SF', 'テクノロジー'],
    warps: 201847,
    discoveries: [
      'どこでもドアから見知らぬ場所の市民が現れました',
      '自律走行の空飛ぶ車が低空通過しました',
      'AIアシスタントホログラムが道案内をしています',
      '量子通信タワーが夜空を照らしています',
      'バイオ発光の植物が歩道を彩っています',
      'ネオン広告が摩天楼に映り込んでいます',
      'データストリームが夜を貫いています',
    ],
    soundscape: { tone: 'cool', freq: 110, ambient: 'cyberpunk' },
  },
  {
    id: 'edo',
    name: '江戸時代',
    subtitle: 'Edo Period',
    year: '1680年',
    desc: '桜が舞い、侍が歩く。世界最大の都市・江戸の喧騒と詫び寂びの美。',
    color: '#ff8860',
    accent: '#ffcc88',
    sky: '#f0c9ad',
    fog: 0xeec8a4,
    emoji: '⛩',
    tags: ['歴史', '日本', '武士'],
    warps: 118562,
    discoveries: [
      '桜の花びらが風に舞い上がっています',
      '商人が橋の袂で鈴カステラを売っています',
      '花魁行列が練り歩いています',
      '職人が木版画を刷っています',
      '寺の鐘が低く響き渡ります',
      '薪売りが町を流し歩いています',
      '長屋から三味線の音が聞こえます',
    ],
    soundscape: { tone: 'warm', freq: 180, ambient: 'wind' },
  },
  {
    id: 'nyc1924',
    name: '1920年代 NY',
    subtitle: 'Jazz Age NY',
    year: '1924年',
    desc: 'ジャズが響き、摩天楼が育つ。雨濡れた石畳と黄金の狂騒時代。',
    color: '#d4a840',
    accent: '#f0cc70',
    sky: '#1a1a2a',
    fog: 0x1a1a2a,
    emoji: '🎷',
    tags: ['歴史', '音楽', 'アメリカ'],
    warps: 72109,
    discoveries: [
      'サックス奏者が路地でブルースを演奏しています',
      '秘密のスピークイージーへの入口を発見しました',
      'ダンサーたちがチャールストンを踊っています',
      '摩天楼の鉄骨が空高くそびえています',
      '雨粒が石畳にジャズのリズムを刻んでいます',
      'T型フォードが路面を軋ませて走っています',
      '葉巻の煙がバーから漏れています',
    ],
    soundscape: { tone: 'warm', freq: 140, ambient: 'rain' },
  },
  {
    id: 'egypt',
    name: '古代エジプト',
    subtitle: 'Kingdom of Egypt',
    year: '紀元前 1280年',
    desc: 'ラムセス2世が統治し、ピラミッドが建設される。ナイルの水が命を育む黄金文明。',
    color: '#f0c040',
    accent: '#ff9900',
    sky: '#f6d26b',
    fog: 0xe8ba5a,
    emoji: '🏺',
    tags: ['古代', 'アフリカ', '神話'],
    warps: 93440,
    discoveries: [
      'ピラミッドが砂漠の熱気に揺らいでいます',
      'ファラオの衛兵が宮殿の門を守っています',
      'ヒエログリフが黄金に輝いています',
      'ナイル川の貿易船が港に着岸しました',
      '天文学者が夜空の星の動きを観測しています',
      'オベリスクが太陽を貫いています',
      'ラクダが隊商と共に砂漠を渡っています',
    ],
    soundscape: { tone: 'warm', freq: 200, ambient: 'wind' },
  },
  {
    id: 'medieval',
    name: '中世ヨーロッパ',
    subtitle: 'Medieval Kingdom',
    year: '1180年',
    desc: '城壁に囲まれた王国。騎士が馬を駆り、市場に商人が集まる。鐘の音が谷に響く。',
    color: '#7a9e5c',
    accent: '#c8e888',
    sky: '#97b8d2',
    fog: 0x9bbad4,
    emoji: '🏰',
    tags: ['中世', 'ヨーロッパ', '騎士'],
    warps: 51203,
    discoveries: [
      '騎士が城壁の上から遠征の準備をしています',
      '鍛冶屋が剣を打ちながら火花を散らしています',
      '市場で香辛料と布地が交換されています',
      '修道士が写本を丁寧に筆写しています',
      '城の宴会場から音楽と笑い声が聞こえます',
      '吟遊詩人が叙事詩を詠い上げています',
      '城の旗が風になびいています',
    ],
    soundscape: { tone: 'warm', freq: 160, ambient: 'wind' },
  },
  {
    id: 'mars2200',
    name: '火星コロニー',
    subtitle: 'Mars Colony',
    year: '2200年',
    desc: '赤い大地に光るドームの街。低重力の空を、人類の子供たちが駆け抜ける。',
    color: '#ff6a4a',
    accent: '#ffbc88',
    sky: '#b85038',
    fog: 0xc05a38,
    emoji: '🪐',
    tags: ['未来', '宇宙', 'SF'],
    warps: 28194,
    locked: true,
    discoveries: [
      'ドームの向こうに地球が青く輝いています',
      '低重力の砂嵐が地表を走っています',
      'テラフォーミング装置が空気を再生しています',
      '採掘ロボットが赤鉄鉱を運んでいます',
      '火星生まれの子供が宙を舞って遊んでいます',
      '第二の太陽が人工の月として輝いています',
      '火星開拓記念碑に名前が刻まれています',
    ],
    soundscape: { tone: 'cool', freq: 90, ambient: 'space' },
  },
  {
    id: 'atlantis',
    name: 'アトランティス',
    subtitle: 'Lost Kingdom',
    year: '紀元前 9600年',
    desc: '失われた大陸。金と銀の塔が海底に沈み、発光する魚が宮殿を泳ぐ。',
    color: '#44d4e0',
    accent: '#88f0e0',
    sky: '#003045',
    fog: 0x003045,
    emoji: '🌊',
    tags: ['幻想', '水中', '神話'],
    warps: 19877,
    locked: true,
    discoveries: [
      '発光するクラゲが宮殿を照らしています',
      '海底神殿に古の呪文が刻まれています',
      '巨大な海亀が悠然と泳いでいます',
      'オリハルコンの柱が虹色に輝いています',
      '海中の虹が水柱を貫いています',
      '失われた王家の紋章を発見しました',
      '深海の底から不思議な光が漂っています',
    ],
    soundscape: { tone: 'cool', freq: 130, ambient: 'water' },
  },
]

/* ============================================================
 * ENHANCED HELPERS — Realistic Textures & Materials
 * ============================================================ */

function makeNoiseTexture(size = 256, tint = 0xffffff) {
  const c = document.createElement('canvas'); c.width = c.height = size
  const ctx = c.getContext('2d')
  const img = ctx.createImageData(size, size)
  const r = (tint >> 16) & 0xff, g = (tint >> 8) & 0xff, b = tint & 0xff
  for (let i = 0; i < img.data.length; i += 4) {
    const n = Math.random()
    img.data[i]     = Math.min(255, r * n)
    img.data[i + 1] = Math.min(255, g * n)
    img.data[i + 2] = Math.min(255, b * n)
    img.data[i + 3] = 255
  }
  ctx.putImageData(img, 0, 0)
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  return tex
}

function makeAdvancedGroundTexture(colorA, colorB, size = 512, pattern = 'stone') {
  const c = document.createElement('canvas'); c.width = c.height = size
  const ctx = c.getContext('2d')
  ctx.fillStyle = colorA; ctx.fillRect(0, 0, size, size)
  
  if (pattern === 'stone') {
    // Layered cobblestone with depth
    for (let i = 0; i < 220; i++) {
      ctx.fillStyle = `rgba(${Math.random()*50|0}, ${Math.random()*40|0}, ${Math.random()*30|0}, ${.12 + Math.random()*.3})`
      const x = Math.random() * size, y = Math.random() * size
      const w = 16 + Math.random() * 40, hh = 16 + Math.random() * 40
      ctx.beginPath()
      ctx.ellipse(x, y, w/2, hh/2, Math.random() * Math.PI, 0, Math.PI*2)
      ctx.fill()
    }
    // Weathering and moss
    for (let i = 0; i < 80; i++) {
      ctx.fillStyle = `rgba(${100+Math.random()*30|0}, ${120+Math.random()*40|0}, ${80+Math.random()*30|0}, ${.05 + Math.random()*.08})`
      ctx.fillRect(Math.random()*size, Math.random()*size, 2 + Math.random()*4, 2 + Math.random()*4)
    }
    // Deep grout lines
    ctx.strokeStyle = `rgba(0,0,0,.5)`; ctx.lineWidth = 1.8
    for (let i = 0; i < 60; i++) {
      ctx.beginPath(); ctx.moveTo(Math.random()*size, Math.random()*size)
      ctx.lineTo(Math.random()*size, Math.random()*size); ctx.stroke()
    }
  } else if (pattern === 'sand') {
    for (let i = 0; i < 6000; i++) {
      ctx.fillStyle = `rgba(${220+Math.random()*35|0}, ${170+Math.random()*45|0}, ${70+Math.random()*50|0}, ${.12 + Math.random()*.18})`
      ctx.fillRect(Math.random()*size, Math.random()*size, 1 + Math.random()*2.5, 1 + Math.random()*2.5)
    }
    // Sand dunes with shadows
    ctx.strokeStyle = 'rgba(140,90,20,.3)'; ctx.lineWidth = 4
    for (let y = 0; y < size; y += 14) {
      ctx.beginPath()
      for (let x = 0; x <= size; x += 8) ctx.lineTo(x, y + Math.sin(x*0.06) * 8 + Math.cos(y*0.03) * 4)
      ctx.stroke()
    }
    // Sand ripples
    ctx.strokeStyle = 'rgba(200,150,80,.15)'; ctx.lineWidth = 1
    for (let y = 0; y < size; y += 6) {
      ctx.beginPath()
      for (let x = 0; x <= size; x += 4) ctx.lineTo(x, y + Math.sin(x*0.1) * 2)
      ctx.stroke()
    }
  } else if (pattern === 'grass') {
    for (let i = 0; i < 5000; i++) {
      ctx.fillStyle = `rgba(${50+Math.random()*40|0}, ${100+Math.random()*50|0}, ${40+Math.random()*40|0}, ${.18 + Math.random()*.25})`
      ctx.fillRect(Math.random()*size, Math.random()*size, 1 + Math.random()*1.8, 2 + Math.random()*4)
    }
    // Grass shadows
    for (let i = 0; i < 1000; i++) {
      ctx.fillStyle = `rgba(0,0,0,.08)`
      ctx.fillRect(Math.random()*size, Math.random()*size, 2 + Math.random()*3, 1 + Math.random()*2)
    }
  } else if (pattern === 'wet') {
    // Wet asphalt with puddles
    for (let i = 0; i < 700; i++) {
      ctx.fillStyle = `rgba(${40 + Math.random()*70|0}, ${40 + Math.random()*70|0}, ${80 + Math.random()*80|0}, ${.25 + Math.random()*.25})`
      ctx.beginPath(); ctx.arc(Math.random()*size, Math.random()*size, 2 + Math.random()*8, 0, Math.PI*2); ctx.fill()
    }
    // Wet reflections and highlights
    ctx.fillStyle = 'rgba(255,255,255,.08)'
    for (let i = 0; i < 30; i++) {
      const y = Math.random() * size
      ctx.fillRect(0, y, size, 1 + Math.random() * 4)
    }
    // Rain streaks
    ctx.strokeStyle = 'rgba(200,220,255,.15)'; ctx.lineWidth = 1
    for (let i = 0; i < 40; i++) {
      ctx.beginPath()
      const x = Math.random() * size
      ctx.moveTo(x, 0)
      ctx.lineTo(x - 2, size)
      ctx.stroke()
    }
  } else if (pattern === 'mars') {
    for (let i = 0; i < 2500; i++) {
      ctx.fillStyle = `rgba(${160+Math.random()*90|0}, ${50+Math.random()*50|0}, ${30+Math.random()*40|0}, ${.25 + Math.random()*.25})`
      ctx.fillRect(Math.random()*size, Math.random()*size, 1 + Math.random()*3.5, 1 + Math.random()*3.5)
    }
    // Craters with depth
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * size, y = Math.random() * size, r = 10 + Math.random() * 28
      const grad = ctx.createRadialGradient(x, y, 1, x, y, r)
      grad.addColorStop(0, 'rgba(40,10,0,.5)')
      grad.addColorStop(0.6, 'rgba(60,20,10,.3)')
      grad.addColorStop(1, 'rgba(60,20,10,0)')
      ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2); ctx.fill()
    }
    // Rock formations
    ctx.fillStyle = 'rgba(100,40,20,.15)'
    for (let i = 0; i < 100; i++) {
      ctx.fillRect(Math.random()*size, Math.random()*size, 3 + Math.random()*8, 1 + Math.random()*3)
    }
  } else if (pattern === 'seafloor') {
    for (let i = 0; i < 2500; i++) {
      ctx.fillStyle = `rgba(${30+Math.random()*70|0}, ${90+Math.random()*90|0}, ${110+Math.random()*90|0}, ${.2 + Math.random()*.3})`
      ctx.fillRect(Math.random()*size, Math.random()*size, 1 + Math.random()*2.5, 1 + Math.random()*2.5)
    }
    // Light caustics (underwater light patterns)
    ctx.globalCompositeOperation = 'screen'
    for (let i = 0; i < 25; i++) {
      const x = Math.random()*size, y = Math.random()*size, r = 25 + Math.random()*50
      const g = ctx.createRadialGradient(x, y, 1, x, y, r)
      g.addColorStop(0, 'rgba(200,255,255,.35)')
      g.addColorStop(0.5, 'rgba(150,220,255,.15)')
      g.addColorStop(1, 'rgba(100,180,255,0)')
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2); ctx.fill()
    }
    ctx.globalCompositeOperation = 'source-over'
    // Seaweed and debris
    ctx.strokeStyle = 'rgba(80,120,100,.2)'; ctx.lineWidth = 2
    for (let i = 0; i < 30; i++) {
      ctx.beginPath()
      let x = Math.random() * size, y = Math.random() * size
      ctx.moveTo(x, y)
      for (let j = 0; j < 5; j++) {
        x += (Math.random() - 0.5) * 20
        y += Math.random() * 15
        ctx.lineTo(x, y)
      }
      ctx.stroke()
    }
  }
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.anisotropy = 8
  return tex
}

// Gradient sky sphere with more depth
function makeGradientSky(colorTop, colorBottom) {
  const c = document.createElement('canvas'); c.width = 16; c.height = 256
  const ctx = c.getContext('2d')
  const grad = ctx.createLinearGradient(0, 0, 0, 256)
  grad.addColorStop(0, colorTop)
  grad.addColorStop(1, colorBottom)
  ctx.fillStyle = grad; ctx.fillRect(0, 0, 16, 256)
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = THREE.RepeatWrapping
  return tex
}

function addGroundPlane(scene, texture, size, receiveShadow = true) {
  const geo = new THREE.PlaneGeometry(size, size)
  const mat = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.75,
    metalness: 0.05,
    side: THREE.DoubleSide,
  })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.rotation.x = -Math.PI / 2
  mesh.receiveShadow = receiveShadow
  scene.add(mesh)
  return mesh
}

function addSun(scene, pos, color, intensity) {
  const light = new THREE.DirectionalLight(color, intensity)
  light.position.set(...pos)
  light.castShadow = true
  light.shadow.mapSize.width = 2048
  light.shadow.mapSize.height = 2048
  light.shadow.camera.far = 500
  light.shadow.camera.left = -200
  light.shadow.camera.right = 200
  light.shadow.camera.top = 200
  light.shadow.camera.bottom = -200
  scene.add(light)
  return light
}

function addHemi(scene, skyColor, groundColor, intensity) {
  const light = new THREE.HemisphereLight(skyColor, groundColor, intensity)
  scene.add(light)
  return light
}

function makeColumn({ height = 10, radius = 1, color = 0xcccccc } = {}) {
  const geo = new THREE.CylinderGeometry(radius, radius * 1.1, height, 16)
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.1 })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.castShadow = mesh.receiveShadow = true
  return mesh
}

function makeTree({ trunkColor = 0x8b4513, leafColor = 0x228b22, scale = 1 } = {}) {
  const group = new THREE.Group()
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.3 * scale, 0.4 * scale, 3 * scale, 8),
    new THREE.MeshStandardMaterial({ color: trunkColor, roughness: 0.9 })
  )
  trunk.castShadow = trunk.receiveShadow = true
  trunk.position.y = 1.5 * scale
  group.add(trunk)
  
  const foliage = new THREE.Mesh(
    new THREE.SphereGeometry(1.8 * scale, 12, 10),
    new THREE.MeshStandardMaterial({ color: leafColor, roughness: 0.8 })
  )
  foliage.castShadow = foliage.receiveShadow = true
  foliage.position.y = 3.5 * scale
  group.add(foliage)
  return group
}

function makeBuilding({ w = 6, h = 20, d = 6, color = 0x333333, windowColor = 0xffff00 } = {}) {
  const group = new THREE.Group()
  
  // Main body
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0.05 })
  )
  body.castShadow = body.receiveShadow = true
  body.position.y = h / 2
  group.add(body)
  
  // Windows with emissive glow
  const windowGeo = new THREE.BoxGeometry(w * 0.8, h * 0.85, 0.1)
  const windowMat = new THREE.MeshStandardMaterial({
    color: windowColor,
    emissive: windowColor,
    emissiveIntensity: 0.6,
    roughness: 0.3,
    metalness: 0.8,
  })
  const windows = new THREE.Mesh(windowGeo, windowMat)
  windows.position.set(0, h / 2, d / 2 + 0.05)
  group.add(windows)
  
  return group
}

function addParticles(scene, { count = 100, color = 0xffffff, size = 0.2, area = 100, gravity = 0, drift = 0 } = {}) {
  const particles = []
  const geo = new THREE.BufferGeometry()
  const positions = new Float32Array(count * 3)
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * area
    positions[i * 3 + 1] = Math.random() * area
    positions[i * 3 + 2] = (Math.random() - 0.5) * area
    particles.push({
      x: positions[i * 3],
      y: positions[i * 3 + 1],
      z: positions[i * 3 + 2],
      vx: (Math.random() - 0.5) * drift,
      vy: gravity,
      vz: (Math.random() - 0.5) * drift,
    })
  }
  
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const mat = new THREE.PointsMaterial({ color, size, sizeAttenuation: true })
  const mesh = new THREE.Points(geo, mat)
  scene.add(mesh)
  
  return { mesh, particles, geo, area }
}

function animateParticles(particleData, t) {
  const { mesh, particles, geo, area } = particleData
  const positions = geo.attributes.position.array
  
  particles.forEach((p, i) => {
    p.x += p.vx * 0.016
    p.y += p.vy * 0.016
    p.z += p.vz * 0.016
    
    if (p.y < -area / 2) p.y = area / 2
    if (Math.abs(p.x) > area / 2) p.x = -p.x
    if (Math.abs(p.z) > area / 2) p.z = -p.z
    
    positions[i * 3] = p.x
    positions[i * 3 + 1] = p.y
    positions[i * 3 + 2] = p.z
  })
  
  geo.attributes.position.needsUpdate = true
}

function addStarfield(scene, count = 200, distance = 300) {
  const geo = new THREE.BufferGeometry()
  const positions = new Float32Array(count * 3)
  
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI
    positions[i * 3] = distance * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = distance * Math.cos(phi)
    positions[i * 3 + 2] = distance * Math.sin(phi) * Math.sin(theta)
  }
  
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.8, sizeAttenuation: true })
  const mesh = new THREE.Points(geo, mat)
  scene.add(mesh)
}

/* ============================================================
 * SCENE BUILDERS — Immersive Worlds
 * ============================================================ */

// ----- 1. Ancient Rome -----
function buildRome() {
  const scene = new THREE.Scene()
  scene.background = makeGradientSky('#f2b974', '#ffd9b3')
  scene.fog = new THREE.Fog(0xf3c380, 50, 280)

  const ground = addGroundPlane(scene, makeAdvancedGroundTexture('#c9a876', '#9d7e5d', 512, 'stone'), 500, true)
  ground.material.metalness = 0.1
  ground.material.roughness = 0.8

  addSun(scene, [80, 120, 60], 0xffd099, 1.4)
  addHemi(scene, 0xffe0b0, 0x8b6f47, 0.6)

  // Temple: 10 columns in two rows
  const temple = new THREE.Group()
  for (let i = 0; i < 7; i++) {
    const col = makeColumn({ height: 16, radius: 1, color: 0xf5e2b5 })
    col.position.set(-18 + i * 6, 0, -30); temple.add(col)
    const col2 = makeColumn({ height: 16, radius: 1, color: 0xf5e2b5 })
    col2.position.set(-18 + i * 6, 0, -42); temple.add(col2)
  }
  // Roof
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(44, 3, 18),
    new THREE.MeshStandardMaterial({ color: 0xdcae75, roughness: 0.6, metalness: 0.15 })
  )
  roof.castShadow = roof.receiveShadow = true
  roof.position.set(0, 18.5, -36); temple.add(roof)
  const ped = new THREE.Mesh(
    new THREE.BoxGeometry(52, 1, 24),
    new THREE.MeshStandardMaterial({ color: 0xd4b582, roughness: 0.7, metalness: 0.1 })
  )
  ped.receiveShadow = true
  ped.position.set(0, 0.1, -36); temple.add(ped)
  scene.add(temple)

  // Side structures (villas)
  for (let i = 0; i < 8; i++) {
    const villa = new THREE.Mesh(
      new THREE.BoxGeometry(8, 6 + Math.random() * 4, 8),
      new THREE.MeshStandardMaterial({ color: 0xe8c798, roughness: 0.85, metalness: 0.05 })
    )
    villa.castShadow = villa.receiveShadow = true
    const angle = Math.random() * Math.PI * 2
    villa.position.set(Math.cos(angle) * (35 + Math.random()*20), 3, Math.sin(angle) * (35 + Math.random()*20))
    // Roof
    const vroof = new THREE.Mesh(
      new THREE.ConeGeometry(6, 3, 4),
      new THREE.MeshStandardMaterial({ color: 0x8a3b28, roughness: 0.7, metalness: 0.1 })
    )
    vroof.castShadow = true
    vroof.position.y = 4.5; vroof.rotation.y = Math.PI / 4; villa.add(vroof)
    scene.add(villa)
  }

  // Cypress trees
  for (let i = 0; i < 16; i++) {
    const t = makeTree({ trunkColor: 0x4a3020, leafColor: 0x2d5a30, scale: 2 + Math.random()*0.5 })
    const angle = Math.random() * Math.PI * 2
    t.position.set(Math.cos(angle) * (28 + Math.random()*40), 0, Math.sin(angle) * (28 + Math.random()*40))
    scene.add(t)
  }

  // Dust particles
  const dust = addParticles(scene, { count: 200, color: 0xffe0a0, size: 0.25, area: 140, gravity: -0.008, drift: 0.025 })

  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 600)
  camera.position.set(0, 2.4, 22)
  camera.lookAt(0, 5, -30)

  return {
    scene, camera,
    update(dt, t) { animateParticles(dust, t) },
  }
}

// ----- 2. Neo Tokyo 2150 -----
function buildTokyo2150() {
  const scene = new THREE.Scene()
  scene.background = makeGradientSky('#0a0028', '#1a005a')
  scene.fog = new THREE.FogExp2(0x07042a, 0.014)

  const ground = addGroundPlane(scene, makeAdvancedGroundTexture('#121238', '#080820', 512, 'wet'), 500, true)
  ground.material.metalness = 0.45
  ground.material.roughness = 0.25

  addHemi(scene, 0x6a20ff, 0x000015, 0.4)
  const key = new THREE.DirectionalLight(0x88aaff, 0.5)
  key.position.set(40, 100, 50)
  key.castShadow = true
  scene.add(key)

  // Neon point lights
  const neonColors = [0xff2680, 0x00e6ff, 0xa864ff, 0xffbe00, 0x00ffaa, 0xff00ff]
  for (let i = 0; i < 14; i++) {
    const c = neonColors[i % neonColors.length]
    const pl = new THREE.PointLight(c, 1.5, 50, 2.2)
    pl.position.set((Math.random()-.5)*100, 6 + Math.random()*12, (Math.random()-.5)*100)
    scene.add(pl)
  }

  // Buildings with neon windows
  const bld = new THREE.Group()
  for (let i = 0; i < 50; i++) {
    const w = 4 + Math.random() * 8, h = 20 + Math.random() * 40, d = 4 + Math.random() * 8
    const color = [0x1a1a28, 0x202034, 0x10102a, 0x181830, 0x0f0f20][Math.floor(Math.random()*5)]
    const winCol = [0xff4488, 0x00d4ff, 0xffcc66, 0xa864ff, 0x44ff88, 0xff00ff][Math.floor(Math.random()*6)]
    const b = makeBuilding({ w, h, d, color, windowColor: winCol })
    let x, z, safe = false, tries = 0
    while (!safe && tries < 20) {
      x = (Math.random()-.5) * 180
      z = (Math.random()-.5) * 180
      if (Math.abs(x) > 12 || Math.abs(z) > 12) safe = true
      tries++
    }
    b.position.set(x, 0, z)
    bld.add(b)
    
    // Rooftop antenna
    if (Math.random() > 0.4) {
      const antenna = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.12, 5 + Math.random()*4, 8),
        new THREE.MeshStandardMaterial({ color: 0x222, emissive: winCol, emissiveIntensity: 0.5 })
      )
      antenna.castShadow = true
      antenna.position.set(x, h + 2.5, z)
      bld.add(antenna)
    }
  }
  scene.add(bld)

  // Flying vehicles
  const flyers = []
  for (let i = 0; i < 12; i++) {
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.5, 1.2),
      new THREE.MeshStandardMaterial({ color: 0x444, emissive: 0xff6688, emissiveIntensity: 1.0 })
    )
    body.castShadow = true
    body.position.set((Math.random()-.5)*100, 18 + Math.random()*22, (Math.random()-.5)*100)
    scene.add(body)
    flyers.push({ mesh: body, speed: 0.12 + Math.random()*0.25, radius: 50 + Math.random()*35, offset: Math.random()*Math.PI*2, height: body.position.y })
  }

  // Starfield
  addStarfield(scene, 500, 280)

  const camera = new THREE.PerspectiveCamera(65, 1, 0.1, 600)
  camera.position.set(0, 2, 18)
  camera.lookAt(0, 10, 0)

  return {
    scene, camera,
    update(dt, t) {
      flyers.forEach((f) => {
        f.mesh.position.x = Math.cos(t * f.speed + f.offset) * f.radius
        f.mesh.position.z = Math.sin(t * f.speed + f.offset) * f.radius
        f.mesh.rotation.y = -t * f.speed + Math.PI/2
      })
    },
  }
}

// ----- 3. Edo -----
function buildEdo() {
  const scene = new THREE.Scene()
  scene.background = makeGradientSky('#e8b6a3', '#f2d2ba')
  scene.fog = new THREE.Fog(0xeec8a4, 45, 240)

  addGroundPlane(scene, makeAdvancedGroundTexture('#6a5030', '#4a3820', 512, 'stone'), 400, true)

  addSun(scene, [70, 110, 50], 0xffd099, 1.3)
  addHemi(scene, 0xffccb0, 0x553322, 0.55)

  // Torii gate
  const torii = new THREE.Group()
  const pillar1 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.9, 0.9, 14, 14),
    new THREE.MeshStandardMaterial({ color: 0xc44a28, roughness: 0.75, metalness: 0.05 })
  )
  pillar1.castShadow = pillar1.receiveShadow = true
  pillar1.position.set(-6, 7, -20); torii.add(pillar1)
  const pillar2 = pillar1.clone(); pillar2.position.x = 6; torii.add(pillar2)
  const beam = new THREE.Mesh(
    new THREE.BoxGeometry(18, 1.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xc44a28, roughness: 0.75, metalness: 0.05 })
  )
  beam.castShadow = beam.receiveShadow = true
  beam.position.set(0, 13, -20); torii.add(beam)
  const beamTop = new THREE.Mesh(
    new THREE.BoxGeometry(20, 2, 2.2),
    new THREE.MeshStandardMaterial({ color: 0x2a1512, roughness: 0.85, metalness: 0.02 })
  )
  beamTop.castShadow = beamTop.receiveShadow = true
  beamTop.position.set(0, 14.5, -20); torii.add(beamTop)
  scene.add(torii)

  // Traditional houses
  for (let i = 0; i < 18; i++) {
    const house = new THREE.Group()
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(6.5, 4.5, 8.5),
      new THREE.MeshStandardMaterial({ color: 0x8a6540, roughness: 0.92, metalness: 0.02 })
    )
    body.castShadow = body.receiveShadow = true
    body.position.y = 2.25; house.add(body)
    // Roof
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(6, 2.8, 4),
      new THREE.MeshStandardMaterial({ color: 0x2c1f18, roughness: 0.85, metalness: 0.03 })
    )
    roof.castShadow = true
    roof.position.y = 5.5; roof.rotation.y = Math.PI/4; house.add(roof)
    const angle = Math.random() * Math.PI * 2
    house.position.set(Math.cos(angle) * (20 + Math.random()*32), 0, Math.sin(angle) * (20 + Math.random()*32))
    house.rotation.y = Math.random() * Math.PI * 2
    scene.add(house)
  }

  // Sakura trees
  for (let i = 0; i < 16; i++) {
    const t = new THREE.Group()
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.35, 2.6, 10),
      new THREE.MeshStandardMaterial({ color: 0x4a2815, roughness: 0.96, metalness: 0.01 })
    )
    trunk.castShadow = true
    trunk.position.y = 1.3; t.add(trunk)
    const foliage = new THREE.Mesh(
      new THREE.SphereGeometry(1.8, 14, 12),
      new THREE.MeshStandardMaterial({ color: 0xffb5ce, roughness: 0.82, metalness: 0.02 })
    )
    foliage.castShadow = foliage.receiveShadow = true
    foliage.position.y = 3.6; foliage.scale.y = 0.85; t.add(foliage)
    const angle = Math.random() * Math.PI * 2
    t.position.set(Math.cos(angle) * (16 + Math.random()*38), 0, Math.sin(angle) * (16 + Math.random()*38))
    scene.add(t)
  }

  // Stone lanterns
  for (let i = 0; i < 10; i++) {
    const lantern = new THREE.Group()
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 0.7, 8), new THREE.MeshStandardMaterial({ color: 0x555, roughness: 0.96, metalness: 0.01 }))
    base.castShadow = base.receiveShadow = true
    base.position.y = 0.35; lantern.add(base)
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 1.4, 8), new THREE.MeshStandardMaterial({ color: 0x555, roughness: 0.96, metalness: 0.01 }))
    stem.castShadow = stem.receiveShadow = true
    stem.position.y = 1.4; lantern.add(stem)
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), new THREE.MeshStandardMaterial({ color: 0x666, roughness: 0.95, metalness: 0.02, emissive: 0xffaa44, emissiveIntensity: 0.3 }))
    head.castShadow = head.receiveShadow = true
    head.position.y = 2.3; lantern.add(head)
    lantern.position.set((Math.random()-.5)*60, 0, (Math.random()-.5)*60)
    scene.add(lantern)
  }

  // Floating cherry blossoms
  const blossoms = addParticles(scene, { count: 120, color: 0xffb5ce, size: 0.35, area: 100, gravity: -0.003, drift: 0.015 })

  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 600)
  camera.position.set(0, 2.5, 20)
  camera.lookAt(0, 4, -25)

  return {
    scene, camera,
    update(dt, t) { animateParticles(blossoms, t) },
  }
}

// ----- 4. Jazz Age NYC 1924 -----
function buildNYC1924() {
  const scene = new THREE.Scene()
  scene.background = makeGradientSky('#2a2a3a', '#1a1a2a')
  scene.fog = new THREE.Fog(0x1a1a2a, 50, 260)

  const ground = addGroundPlane(scene, makeAdvancedGroundTexture('#2a2a3a', '#1a1a2a', 512, 'wet'), 450, true)
  ground.material.metalness = 0.35
  ground.material.roughness = 0.35

  addHemi(scene, 0x6a6a8a, 0x2a2a3a, 0.5)
  const key = new THREE.DirectionalLight(0xccaa88, 0.6)
  key.position.set(60, 90, 40)
  key.castShadow = true
  scene.add(key)

  // Streetlights
  for (let i = 0; i < 8; i++) {
    const light = new THREE.PointLight(0xffcc88, 1.8, 60, 2.0)
    light.position.set((Math.random()-.5)*120, 8, (Math.random()-.5)*120)
    scene.add(light)
  }

  // Tall buildings
  const bld = new THREE.Group()
  for (let i = 0; i < 45; i++) {
    const w = 5 + Math.random() * 7, h = 30 + Math.random() * 50, d = 5 + Math.random() * 7
    const color = [0x1a1a2a, 0x252535, 0x1f1f2f][Math.floor(Math.random()*3)]
    const winCol = [0xffcc88, 0xffaa66, 0xffdd99][Math.floor(Math.random()*3)]
    const b = makeBuilding({ w, h, d, color, windowColor: winCol })
    let x, z, safe = false, tries = 0
    while (!safe && tries < 20) {
      x = (Math.random()-.5) * 160
      z = (Math.random()-.5) * 160
      if (Math.abs(x) > 15 || Math.abs(z) > 15) safe = true
      tries++
    }
    b.position.set(x, 0, z)
    bld.add(b)
  }
  scene.add(bld)

  // Rain particles
  const rain = addParticles(scene, { count: 300, color: 0xccddff, size: 0.15, area: 160, gravity: -0.08, drift: 0.04 })

  const camera = new THREE.PerspectiveCamera(65, 1, 0.1, 600)
  camera.position.set(0, 2.2, 20)
  camera.lookAt(0, 8, 0)

  return {
    scene, camera,
    update(dt, t) { animateParticles(rain, t) },
  }
}

// ----- 5. Ancient Egypt -----
function buildEgypt() {
  const scene = new THREE.Scene()
  scene.background = makeGradientSky('#f6d26b', '#ffd9a3')
  scene.fog = new THREE.Fog(0xe8ba5a, 80, 400)

  const ground = addGroundPlane(scene, makeAdvancedGroundTexture('#e8c050', '#d4a840', 512, 'sand'), 600, true)
  ground.material.metalness = 0.05
  ground.material.roughness = 0.9

  addSun(scene, [100, 140, 80], 0xffdd99, 1.5)
  addHemi(scene, 0xffe8b0, 0x8b6f47, 0.65)

  // Pyramids
  for (let i = 0; i < 3; i++) {
    const pyr = new THREE.Mesh(
      new THREE.ConeGeometry(25 - i*5, 40 - i*8, 4),
      new THREE.MeshStandardMaterial({ color: 0xe8c050, roughness: 0.85, metalness: 0.08 })
    )
    pyr.castShadow = pyr.receiveShadow = true
    pyr.position.set(-60 + i*50, 20 - i*4, -80)
    scene.add(pyr)
  }

  // Obelisks
  for (let i = 0; i < 4; i++) {
    const obelisk = new THREE.Mesh(
      new THREE.ConeGeometry(2, 20, 4),
      new THREE.MeshStandardMaterial({ color: 0xf0c040, roughness: 0.7, metalness: 0.2 })
    )
    obelisk.castShadow = obelisk.receiveShadow = true
    obelisk.position.set(-40 + i*40, 10, -40 + i*30)
    scene.add(obelisk)
  }

  // Temples
  for (let i = 0; i < 2; i++) {
    const temple = new THREE.Group()
    for (let j = 0; j < 4; j++) {
      const col = makeColumn({ height: 12, radius: 1.2, color: 0xf5e2b5 })
      col.position.set(-8 + j * 5, 0, 0)
      temple.add(col)
    }
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(20, 2.5, 10),
      new THREE.MeshStandardMaterial({ color: 0xdcae75, roughness: 0.65, metalness: 0.12 })
    )
    roof.castShadow = roof.receiveShadow = true
    roof.position.y = 13
    temple.add(roof)
    temple.position.set(-80 + i*160, 0, 60)
    scene.add(temple)
  }

  // Palm trees
  for (let i = 0; i < 20; i++) {
    const t = makeTree({ trunkColor: 0x6b4423, leafColor: 0x3d6b2f, scale: 1.5 + Math.random()*0.8 })
    const angle = Math.random() * Math.PI * 2
    t.position.set(Math.cos(angle) * (40 + Math.random()*80), 0, Math.sin(angle) * (40 + Math.random()*80))
    scene.add(t)
  }

  // Sand storm particles
  const sandstorm = addParticles(scene, { count: 250, color: 0xd4a840, size: 0.3, area: 200, gravity: -0.01, drift: 0.035 })

  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 600)
  camera.position.set(0, 3, 30)
  camera.lookAt(0, 8, -50)

  return {
    scene, camera,
    update(dt, t) { animateParticles(sandstorm, t) },
  }
}

// ----- 6. Medieval Europe -----
function buildMedieval() {
  const scene = new THREE.Scene()
  scene.background = makeGradientSky('#97b8d2', '#c0d8e8')
  scene.fog = new THREE.Fog(0x9bbad4, 60, 320)

  const ground = addGroundPlane(scene, makeAdvancedGroundTexture('#5a7a4a', '#3a5a2a', 512, 'grass'), 500, true)
  ground.material.metalness = 0.02
  ground.material.roughness = 0.92

  addSun(scene, [70, 100, 50], 0xf0d090, 1.2)
  addHemi(scene, 0xd0e0f0, 0x4a6a3a, 0.55)

  // Castle
  const castle = new THREE.Group()
  const keep = new THREE.Mesh(
    new THREE.BoxGeometry(20, 35, 20),
    new THREE.MeshStandardMaterial({ color: 0x6b5a4a, roughness: 0.88, metalness: 0.05 })
  )
  keep.castShadow = keep.receiveShadow = true
  keep.position.set(0, 17.5, -40)
  castle.add(keep)
  
  // Towers
  for (let i = 0; i < 4; i++) {
    const tower = new THREE.Mesh(
      new THREE.CylinderGeometry(3, 3.5, 30, 12),
      new THREE.MeshStandardMaterial({ color: 0x5a4a3a, roughness: 0.9, metalness: 0.03 })
    )
    tower.castShadow = tower.receiveShadow = true
    const angle = (i / 4) * Math.PI * 2
    tower.position.set(Math.cos(angle) * 15, 15, -40 + Math.sin(angle) * 15)
    castle.add(tower)
  }
  
  // Walls
  const wall = new THREE.Mesh(
    new THREE.BoxGeometry(50, 12, 2),
    new THREE.MeshStandardMaterial({ color: 0x6b5a4a, roughness: 0.88, metalness: 0.04 })
  )
  wall.castShadow = wall.receiveShadow = true
  wall.position.set(0, 6, -60)
  castle.add(wall)
  scene.add(castle)

  // Cottages
  for (let i = 0; i < 12; i++) {
    const cottage = new THREE.Group()
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(5, 3.5, 6),
      new THREE.MeshStandardMaterial({ color: 0x7a6a5a, roughness: 0.9, metalness: 0.02 })
    )
    body.castShadow = body.receiveShadow = true
    body.position.y = 1.75
    cottage.add(body)
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(4, 2, 4),
      new THREE.MeshStandardMaterial({ color: 0x4a3a2a, roughness: 0.85, metalness: 0.03 })
    )
    roof.castShadow = true
    roof.position.y = 4
    roof.rotation.y = Math.PI / 4
    cottage.add(roof)
    const angle = Math.random() * Math.PI * 2
    cottage.position.set(Math.cos(angle) * (35 + Math.random()*40), 0, Math.sin(angle) * (35 + Math.random()*40))
    scene.add(cottage)
  }

  // Trees
  for (let i = 0; i < 18; i++) {
    const t = makeTree({ trunkColor: 0x5a3a1a, leafColor: 0x4a7a2a, scale: 1.8 + Math.random()*0.6 })
    const angle = Math.random() * Math.PI * 2
    t.position.set(Math.cos(angle) * (25 + Math.random()*50), 0, Math.sin(angle) * (25 + Math.random()*50))
    scene.add(t)
  }

  // Wind particles
  const wind = addParticles(scene, { count: 80, color: 0xd0e0f0, size: 0.2, area: 120, gravity: -0.004, drift: 0.02 })

  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 600)
  camera.position.set(0, 3, 25)
  camera.lookAt(0, 10, -35)

  return {
    scene, camera,
    update(dt, t) { animateParticles(wind, t) },
  }
}

// ----- 7. Mars Colony -----
function buildMars2200() {
  const scene = new THREE.Scene()
  scene.background = makeGradientSky('#b85038', '#d47a5a')
  scene.fog = new THREE.FogExp2(0xc05a38, 0.008)

  const ground = addGroundPlane(scene, makeAdvancedGroundTexture('#c05a38', '#8a3a1a', 512, 'mars'), 600, true)
  ground.material.metalness = 0.15
  ground.material.roughness = 0.85

  addHemi(scene, 0xff8844, 0x4a1a0a, 0.6)
  const key = new THREE.DirectionalLight(0xffaa66, 0.8)
  key.position.set(80, 120, 60)
  key.castShadow = true
  scene.add(key)

  // Domes
  for (let i = 0; i < 4; i++) {
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(15, 16, 12),
      new THREE.MeshStandardMaterial({ color: 0x88ccff, roughness: 0.4, metalness: 0.6, emissive: 0x44aaff, emissiveIntensity: 0.3 })
    )
    dome.castShadow = dome.receiveShadow = true
    dome.position.set(-60 + i*50, 15, -40)
    scene.add(dome)
  }

  // Structures
  for (let i = 0; i < 8; i++) {
    const struct = new THREE.Mesh(
      new THREE.BoxGeometry(8, 6 + Math.random()*4, 8),
      new THREE.MeshStandardMaterial({ color: 0x555, roughness: 0.8, metalness: 0.3 })
    )
    struct.castShadow = struct.receiveShadow = true
    const angle = Math.random() * Math.PI * 2
    struct.position.set(Math.cos(angle) * (50 + Math.random()*40), 3, Math.sin(angle) * (50 + Math.random()*40))
    scene.add(struct)
  }

  // Earth in sky
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(8, 16, 16),
    new THREE.MeshStandardMaterial({ color: 0x4488ff, emissive: 0x2266ff, emissiveIntensity: 0.4 })
  )
  earth.position.set(150, 200, 100)
  scene.add(earth)

  // Dust storm
  const dust = addParticles(scene, { count: 200, color: 0xd4a840, size: 0.25, area: 180, gravity: -0.005, drift: 0.03 })

  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 600)
  camera.position.set(0, 3, 28)
  camera.lookAt(0, 8, -20)

  return {
    scene, camera,
    update(dt, t) { animateParticles(dust, t) },
  }
}

// ----- 8. Atlantis -----
function buildAtlantis() {
  const scene = new THREE.Scene()
  scene.background = makeGradientSky('#003045', '#004060')
  scene.fog = new THREE.Fog(0x003045, 40, 200)

  const ground = addGroundPlane(scene, makeAdvancedGroundTexture('#1a4a5a', '#0a3a4a', 512, 'seafloor'), 500, true)
  ground.material.metalness = 0.3
  ground.material.roughness = 0.6

  addHemi(scene, 0x4488ff, 0x001a2a, 0.5)
  const key = new THREE.DirectionalLight(0x88ccff, 0.6)
  key.position.set(60, 80, 50)
  key.castShadow = true
  scene.add(key)

  // Underwater lights
  for (let i = 0; i < 10; i++) {
    const light = new THREE.PointLight(0x44aaff, 1.2, 70, 2.0)
    light.position.set((Math.random()-.5)*100, 10 + Math.random()*20, (Math.random()-.5)*100)
    scene.add(light)
  }

  // Towers
  for (let i = 0; i < 6; i++) {
    const tower = new THREE.Mesh(
      new THREE.CylinderGeometry(4, 5, 25, 8),
      new THREE.MeshStandardMaterial({ color: 0x88ccff, roughness: 0.6, metalness: 0.4, emissive: 0x44aaff, emissiveIntensity: 0.25 })
    )
    tower.castShadow = tower.receiveShadow = true
    const angle = (i / 6) * Math.PI * 2
    tower.position.set(Math.cos(angle) * 40, 12.5, Math.sin(angle) * 40)
    scene.add(tower)
  }

  // Ruins
  for (let i = 0; i < 12; i++) {
    const ruin = new THREE.Mesh(
      new THREE.BoxGeometry(6 + Math.random()*4, 4 + Math.random()*3, 6 + Math.random()*4),
      new THREE.MeshStandardMaterial({ color: 0x4a7a8a, roughness: 0.8, metalness: 0.2 })
    )
    ruin.castShadow = ruin.receiveShadow = true
    const angle = Math.random() * Math.PI * 2
    ruin.position.set(Math.cos(angle) * (30 + Math.random()*50), 2, Math.sin(angle) * (30 + Math.random()*50))
    scene.add(ruin)
  }

  // Bioluminescent particles
  const biolum = addParticles(scene, { count: 150, color: 0x44aaff, size: 0.3, area: 120, gravity: -0.002, drift: 0.01 })

  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 600)
  camera.position.set(0, 2.5, 22)
  camera.lookAt(0, 6, -20)

  return {
    scene, camera,
    update(dt, t) { animateParticles(biolum, t) },
  }
}

/* ============================================================
 * SCENE BUILDERS EXPORT
 * ============================================================ */
export const SCENE_BUILDERS = {
  rome: buildRome,
  tokyo2150: buildTokyo2150,
  edo: buildEdo,
  nyc1924: buildNYC1924,
  egypt: buildEgypt,
  medieval: buildMedieval,
  mars2200: buildMars2200,
  atlantis: buildAtlantis,
}

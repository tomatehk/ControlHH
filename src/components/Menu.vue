<template>
	<el-aside class="menu">
		<el-menu default-active="1" class="el-menu-vertical-demo">
			<el-menu-item index="1">
				<template slot="title">
					<i class="el-icon-menu"></i>
					<span slot="title">Estatus de habitaciones</span>
				</template>
			</el-menu-item>
			<el-menu-item index="2">
				<i class="el-icon-info"></i>
				<span slot="title">Información de Habitaciones</span>
			</el-menu-item>
			<el-menu-item index="3">
				<i class="el-icon-tickets"></i>
				<span slot="title">Historial</span>
			</el-menu-item>
		</el-menu>
	</el-aside>
</template>
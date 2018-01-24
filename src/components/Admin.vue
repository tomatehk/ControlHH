<template>
	<div>
		<!-- main header -->
		<main-header />
		<!-- end main header -->
		<el-container>
			<el-main :style="{overflow: 'scroll', height: height}">
				<el-row :gutter=10>
					<el-col :xs="2" :sm="6" :md="6" :lg="5" :xl="5">
						<el-card>
							<h2><i class="el-icon-info" style="color: #e6a23c"></i> Información</h2>

							<!-- ////// -->
							<h3>Habitaciones</h3>
							<hr />

							<h4>Matrimoniales</h4>
							<hr />

							<h4>Dobles</h4>
							<hr />

							<h4>Triples</h4>
							<hr />

							<h4>Familiar</h4>
							<hr />

							<h4>Super Familiar</h4>
							<hr />

							<h4>Semi-suite</h4>
							<hr />

							<h4>Suite</h4>
							<hr />
						</el-card>
					</el-col>

					<el-col :xs="3" :sm="18" :md="18" :lg="19" :xl="19">
						<!-- add more rooms -->
						<el-card>
							<h2 style="text-align: center"><i class="el-icon-circle-plus-outline" style="color: #409EFF"></i> Agregar nueva habitacion</h2>
							<br />
							<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
								<el-form-item label="Numero" required>
									<el-row>
										<el-col :span="6">
											<el-form-item prop="date1">
												<el-input-number :min="1" :max="10"></el-input-number>
											</el-form-item>
										</el-col>
										<el-col :span="18">
											<el-form-item label="Tipo" prop="region">
												<el-select v-model="ruleForm.region" placeholder="Activity zone">
													<el-option label="Zone one" value="shanghai"></el-option>
													<el-option label="Zone two" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
									</el-row>
								</el-form-item>

								<el-form-item label="Tv" required>
									<el-row>
										<el-col :span="7">
											<el-form-item prop="region">
												<el-select v-model="ruleForm.region" placeholder="Activity zone">
													<el-option label="Zone one" value="shanghai"></el-option>
													<el-option label="Zone two" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span="13">
											<el-form-item label="Precio" prop="date1">
												<el-input-number :min="1" :max="10"></el-input-number>
											</el-form-item>
										</el-col>
									</el-row>
								</el-form-item>

								<el-row style="text-align: center;">
									<el-button type="success" @click="submitForm('ruleForm')">Agregar</el-button>
									<el-button type="info" @click="resetForm('ruleForm')">Ayuda</el-button>
								</el-row>
							</el-form>
						</el-card>
						<!-- end add more rooms -->
						<br />

						<!-- change price -->
						<el-card>
							<h2 style="text-align: center"><i class="el-icon-edit" style="color: #409EFF"></i> Cambiar precios</h2>
							<br />
							<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
								<el-form-item label="Tv" required>
									<el-row>
										<el-col :span="7">
											<el-form-item prop="region">
												<el-select v-model="ruleForm.region" placeholder="Activity zone">
													<el-option label="Zone one" value="shanghai"></el-option>
													<el-option label="Zone two" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span="13">
											<el-form-item label="Precio" prop="date1">
												<el-input-number :min="1" :max="10"></el-input-number>
											</el-form-item>
										</el-col>
									</el-row>
								</el-form-item>

								<el-row style="text-align: center;">
									<el-button type="success">Guardar</el-button>
									<el-button type="info" @click="resetForm('ruleForm')">Ayuda</el-button>
								</el-row>
							</el-form>
						</el-card>
						<!-- end add change price -->

						<br />
						<!-- delete room -->
						<el-card>
							<h2 style="text-align: center"><i class="el-icon-close" style="color: #f56c6c"></i> Eliminar habitacion</h2>
							<br />
							<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
								<el-form-item label="Numero" required>
									<el-form-item prop="region">
										<el-select v-model="ruleForm.region" placeholder="Activity zone">
											<el-option label="Zone one" value="shanghai"></el-option>
											<el-option label="Zone two" value="beijing"></el-option>
										</el-select>
									</el-form-item>
								</el-form-item>

								<el-row style="text-align: center;">
									<el-button type="danger" @click="submitForm('ruleForm')">Eliminar</el-button>
									<el-button type="info" @click="resetForm('ruleForm')">Ayuda</el-button>
								</el-row>
							</el-form>
						</el-card>
						<!-- end delete room -->
					</el-col>
				</el-row>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import Header from '@/components/Header'

	export default {
		data() {
			var getHeight = () => {
				let height = window.innerHeight
				return (height - 60) + 'px'
			}
			return {
				height: getHeight(),
				ruleForm: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				rules: {
					name: [
					{ required: true, message: 'Please input Activity name', trigger: 'blur' },
					{ min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
					],
					region: [
					{ required: true, message: 'Please select Activity zone', trigger: 'change' }
					],
					date1: [
					{ type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
					],
					date2: [
					{ type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
					],
					type: [
					{ type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
					],
					resource: [
					{ required: true, message: 'Please select activity resource', trigger: 'change' }
					],
					desc: [
					{ required: true, message: 'Please input activity form', trigger: 'blur' }
					]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		},
		components: {
			'main-header': Header
		}
	}
</script>

<style>
body {
	overflow: hidden;
}
</style>

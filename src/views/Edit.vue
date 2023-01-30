<template>
  <div class="ctn">
    <navbar />

    <div class="ctn1">
      <div class="card1">

        <div class="card card-body ">
          <h2 class="Titre">Ajouter une annonce</h2>
          <h3 class="STitre"> Comme vous n'avez jamais publié d'offre d'emploi, vous devrez créer un compte employeur.</h3>
          <form @submit.prevent="update">
            <div class="form-group">
              <label>Intitulé de la mission *</label>
              <input  v-model="form.poste" class="form-control" required />
            </div>

            <div class="form-group mt-3">
              <label>Lieux</label>
              <input
                  v-model="form.lieux"
                  class="form-control"
                  type="text"
                  required
              />
            </div>
            <div class="form-group ">
              <label>La Mission</label>
              <input
                  v-model="form.mission"
                  class="mission form-control"
                  type="text"
                  required
              />
            </div>

            <button type="submit" class="btn btn-primary  mt-3">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { getUser, updateUser } from '@/main'
import {useRoute, useRouter} from "vue-router/composables";

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)

    const form = reactive({ poste: '', lieux: '', mission: '' })
    onMounted(async () => {
      const user = await getUser(userId.value)
      console.log(user, userId.value)
      form.poste = user.poste
      form.lieux = user.lieux
      form.mission = user.mission
    })

    const update = async () => {
      await updateUser(userId.value, { ...form })
      router.push('/').then(r => console.log(r))
      form.poste = ''
      form.lieux = ''
      form.mission = ''
    }

    return { form, update }
  }
}
</script>

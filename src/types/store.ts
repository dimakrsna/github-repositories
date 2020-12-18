import { State as CommonState } from '@store/common'
import { State as RepositoriesState } from '@store/repositories'

export interface StoreTypes {
  common: CommonState,
  repositories: RepositoriesState,
}
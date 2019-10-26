import UA_FLAG from 'styles/assets/flags/ukraine_flag.svg';
import RU_FLAG from 'styles/assets/flags/russia_flag.svg';
import ENG_FLAG from 'styles/assets/flags/united_kingdom_flag.svg';

export const UA = 'UA';
export const RU = 'RU';
export const ENG = 'ENG';

export type Languages = 'UA' | 'RU' | 'ENG';

export const FLAGS = {
  [UA]: UA_FLAG,
  [RU]: RU_FLAG,
  [ENG]: ENG_FLAG
}
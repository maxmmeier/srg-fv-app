import { MembershipPdf } from '../../../srg-fv-contract/membershipPdf';
import { Membership } from '../entities/membership';

export declare function generateMembershipPdf(
  membership: Membership,
): MembershipPdf;

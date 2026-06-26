# Humanitarian Compliance and Defense Sovereignty

The CARTIO protocol was designed to operate in scenarios where human life and the security of communications operate under extreme conditions. For this reason, the specification complies with humanitarian law standards and international interoperability guidelines:

---

## 1. Geneva Conventions (Annex I to Protocol I)
Annex I to Protocol I of the Geneva Conventions governs the means of identification for medical and civil defense personnel in armed conflicts.

CARTIO formally models the safeguarding of personnel in its Schema through specific attributes:
*   `cartioGenevaRole`: Defines the protected classification of the professional (e.g., *MedicalPersonnel, CivilDefence*).
*   `cartioGenevaStatus`: International humanitarian law status that guarantees immunity (e.g., *Protected*).

---

## 2. UN / OCHA Guidelines
The United Nations Office for the Coordination of Humanitarian Affairs (**OCHA**) establishes strict guidelines on data governance in crises to protect the privacy of victims and volunteers.

CARTIO integrates:
*   **Granular Access Control (ACLs)**: Strict read-blocking of biometric metadata and clearance levels through dynamic ACLs configured at Run-Time in the OpenLDAP daemon.
*   **Technological Sovereignty**: Use of non-proprietary open standards, guaranteeing State self-sufficiency without logical dependence on foreign cloud providers.

---

## 3. NATO FMN (Federated Mission Networking)
FMN is the NATO specification that allows the immediate federation of networks in multinational coalition operations. CARTIO implements federation on "Day Zero" through LDAP's hierarchical structure and Syncrepl cookies, enabling real-time synchronization of identities between distinct forces.
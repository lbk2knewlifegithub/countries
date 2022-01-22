export interface EntityMapper<Entity, DomainModel> {
  mapToDomain(entity: Entity): DomainModel;

  mapToEntity(domain: DomainModel): Entity;

}

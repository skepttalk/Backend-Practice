import { Router } from "express";
const skillsRouter = Router();

let uid = 0;

class Skill {
  Skills = {};
  length = 0;

  getAllSkill() {
    if (!this.length) {
      throw new NotFoundError("No Skills found");
    }
    return this.Skills;
  }

  getSkill(id) {
    const Skill = this.Skills[id];
    if (!Skill) {
      throw new NotFoundError("Skill not found");
    }
    return Skill;
  }

  postSkill(Skill) {
    if (!Skill?.name) {
      throw new BadRequestError("Skill name is required");
    }

    for (let key in this.Skills) {
      if (this.Skills[key].name === Skill.name) {
        throw new ConflictError("Skill already exists");
      }
    }

    const newSkill = {
      name: Skill.name,
      Proficiency: Skill.Proficiency ?? Skill.proficiency ??  "unknown",
      Experience: Skill.Experience ?? Skill.experience ?? 0,
    };

    this.Skills[uid++] = newSkill;
    this.length++;

    return newSkill;
  }

  putSkill(id, Skill) {
    if (!this.Skills[id]) {
      throw new NotFoundError("Skill not found");
    }

    this.Skills[id] = {
      ...this.Skills[id],
      ...Skill,
    };

    return this.Skills[id];
  }

  deleteSkill(id) {
    if (!this.Skills[id]) {
      throw new NotFoundError("Skill not found");
    }

    delete this.Skills[id];
    this.length--;
  }
}

const Skills = new Skill();

skillsRouter.get("/", (req, res) => {
  const data = Skills.getAllSkill();
  res.status(200).json({ success: true, data });
});

skillsRouter.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    throw new BadRequestError("ID must be a number");
  }

  const Skill = Skills.getSkill(id);
  res.status(200).json({ success: true, data: Skill });
});

skillsRouter.post("/", (req, res) => {
  const Skill = Skills.postSkill(req.body);
  res.status(201).json({ success: true, data: Skill });
});

skillsRouter.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    throw new BadRequestError("ID must be a number");
  }

  const updated = Skills.putSkill(id, req.body);
  res.status(200).json({ success: true, data: updated });
});

skillsRouter.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    throw new BadRequestError("ID must be a number");
  }

  Skills.deleteSkill(id);
  res.status(204).send();
});

export default skillsRouter;

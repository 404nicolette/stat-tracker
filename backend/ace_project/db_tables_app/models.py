from django.db import models

# Create your models here.
from django.db import models
from django.forms import ValidationError

# Create your models here.


class Tournament(models.Model):
    tournament = models.BigAutoField(primary_key=True)
    tournament_name = models.CharField(null=False, max_length=250)

    #for debugging purposes
    def __str__(self):
        return self.tournament_name


    class Meta:
        db_table = "Tournament"




class Season(models.Model):
    season = models.BigAutoField(primary_key=True)
    season_number = models.IntegerField(null=False, unique=True) 
    season_year = models.DateField()

    season_gold = models.CharField(null=False, max_length=500)
    season_silver = models.CharField(null=False, max_length=500)
    season_bronze = models.CharField(null=False, max_length=500)

    # FK
    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE)


    def clean(self):
        if Season.objects.filter(season_number=self.season_number, tournament=self.tournament).exist():
            raise ValidationError(f"season number {self.season_number} already exists for tournament {self.tournament.tournament_name} id: {self.tournament.tournament}")
        

    #for debugging purposes
    def __str__(self):
        return (f"{self.tournament.tournament_name} Season {self.season_number}")
    
    class Meta:
        db_table = "Season"



class Team(models.Model):
    team = models.BigAutoField(primary_key=True)
    team_name = models.CharField(null=False, max_length=250)

    # calculate season stats per tem
    total_spike = models.BigIntegerField(null=False)
    total_block = models.BigIntegerField(null=False)
    total_serve = models.BigIntegerField(null=False)
    total_set = models.BigIntegerField(null=False)
    total_reception = models.BigIntegerField(null=False)
    total_dig = models.BigIntegerField(null=False) 

    total_score = models.BigIntegerField(null=False) 
    total_errors = models.BigIntegerField(null=False)

    # FK
    season = models.ForeignKey(Season, on_delete=models.CASCADE)

    #for debugging purposes
    def __str__(self):
        return f"{self.team_name}"
    

    class Meta:
        db_table = "Team"






class Player(models.Model):
    player = models.BigAutoField(primary_key=True)
    player_name = models.CharField(null=False, max_length=250)
    player_position = models.CharField(null=False, max_length=250)

    # average player stats
    spike = models.BigIntegerField(null=False)
    block = models.BigIntegerField(null=False)
    serve = models.BigIntegerField(null=False)
    set = models.BigIntegerField(null=False)
    reception = models.BigIntegerField(null=False)
    dig = models.BigIntegerField(null=False) 

    score = models.BigIntegerField(null=False) 

    # FK
    team =  models.ForeignKey(Team, on_delete=models.CASCADE)


    #for debugging purposes
    def __str__(self):
        return f"{self.player_name} on team: {self.team.team_name}"

    class Meta:
        db_table = "TotalPlayerStat"



class Match(models.Model):
    match = models.BigAutoField(primary_key=True)

    # FK to the team name
    team_a = models.ForeignKey(Team, related_name="Matches_as_Team_a", on_delete=models.CASCADE)
    team_b = models.ForeignKey(Team, related_name="Matches_as_Team_b", on_delete=models.CASCADE)


    # FK
    season =  models.ForeignKey(Season, on_delete=models.CASCADE)

    def __str__(self):
        return (f"match {self.match}: {self.team_a.team_name} vs {self.team_b.team_name}")


    class Meta:
        db_table = "Match"


class Set(models.Model):
    set_number = models.IntegerField(null=False)
    team_a_score = models.BigIntegerField(null=False, default=0) 
    team_b_score = models.BigIntegerField(null=False, default=0)


    # FK
    match = models.ForeignKey(Match, on_delete=models.CASCADE) 

    class Meta:
        db_table = "Set"

    def __str__(self):
        return f"set {self.set_number} of match {self.match}"





class PlayerPerMatch(models.Model):
    spike = models.BigIntegerField(null=False)
    block = models.BigIntegerField(null=False)
    serve = models.BigIntegerField(null=False)
    set = models.BigIntegerField(null=False)
    reception = models.BigIntegerField(null=False)
    dig = models.BigIntegerField(null=False) 

    score = models.BigIntegerField(null=False) 

    # FK
    match =  models.ForeignKey(Match, on_delete=models.CASCADE)
    player =  models.ForeignKey(Player, on_delete=models.CASCADE)

    def __str__(self):
        return (f"{self.player.player_name} Stats for Match {self.match.match}")
    

    class Meta:
        db_table = "PlayerPerMatch"
